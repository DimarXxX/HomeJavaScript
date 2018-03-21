# `applyMiddleware(...middlewares)`

Мидлвэр (middleware) является предложенным способом расширения Redux с помощью пользовательской функциональности. Мидлвэр позволяет вам обернуть метод хранилища [`dispatch`](Store.md#dispatch) для пользы и дела. Ключевой особенностью мидлвэра является то, что они компонуемы. Несколько мидлвэров могут быть объединены вместе, при этом каждый мидлвэр не требует знания о том, что происходит до или после него в цепочке.

Наиболее распространенным случаем использования мидлвэров является поддержка асинхронных действий без необходимости в большом количестве шаблонного кода или зависимости от библиотек типа [Rx](https://github.com/Reactive-Extensions/RxJS). Это позволяет вам вызывать [асинхронные действия](../Glossary.md#async-action) помимо обычных действий.

Например, [redux-thunk](https://github.com/gaearon/redux-thunk) позволяет генераторам действий инвертировать управление вызывая функции. Они будут получать [`dispatch`](Store.md#dispatch) как аргумент и могут вызывать его асинхронно. Такие функции называются *преобразователями (thunks)*. Другим примером мидлвэра является [redux-promise](https://github.com/acdlite/redux-promise). Он позволяет вам вызывать асинхронное действие c [Promise](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Promise) и вызывать обычные действия, когда промис вернет resolve.

Мидлвэры нельзя сравнивать с [`createStore`](createStore.md) и это не фундаментальная часть архитектуры Redux, но мы считаем, что достаточно полезно поддерживать их прямо в ядре. Таким образом, существует единственный стандартный способ расширить [`dispatch`](Store.md#dispatch) в экосистеме и разные мидлвэры могут конкурировать в выразительности и полезности.

#### Параметры

* `...middlewares` (*arguments*): Функции, которые соответствуют Redux *middleware API*. Каждый мидлвэр получает [`dispatch`](Store.md#dispatch) и [`getState`](Store.md#getState) функции в качестве именованных аргументов и возвращает функцию. Эта функция будет передана `next` dispatch-методу мидлвэра и, как ожидается, вернет функцию `действия`, вызывающую `next(action)` с возможно другим аргументом или позже или, возможно, не вызывая его вообще. Последний мидлвэр в цепочке получит реальный [`dispatch`](Store.md#dispatch) метод хранилища в качестве `next` параметра, таким образом завершая цепочку. Следовательно, сигнатурой мидлвэра является `({ getState, dispatch }) => next => action`.

#### Возвращает

(*Function*) Расширитель хранилища, который применяет полученный мидлвэр. Сигнатурой расширителя хранилища является `createStore => createStore'`, но самый простой способ его применить - это передать его в [`createStore()`](./createStore.md) как последний аргумент `enhancer`.

#### Пример: Мидлвэр для кастомного логирования

```js
import { createStore, applyMiddleware } from 'redux'
import todos from './reducers'

function logger({ getState }) {
  return (next) => (action) => {
    console.log('will dispatch', action)

    // Вызовем следующий метод dispatch в цепочке мидлвэров.
    let returnValue = next(action)

    console.log('state after dispatch', getState())

    // Это наверняка будет `действие`, если только
    // какой-нибудь `мидлвэр` дальше в цепочке не изменит его.
    return returnValue
  }
}

let store = createStore(
  todos,
  [ 'Use Redux' ],
  applyMiddleware(logger)
)

store.dispatch({
  type: 'ADD_TODO',
  text: 'Understand the middleware'
})
// (Эти строки будут залогированы милдвэром:)
// will dispatch: { type: 'ADD_TODO', text: 'Understand the middleware' }
// state after dispatch: [ 'Use Redux', 'Understand the middleware' ]
```

#### Пример: Использование Thunk мидлвэра для асинхронных действий

```js
import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import * as reducers from './reducers'

let reducer = combineReducers(reducers)
// applyMiddleware улучшает createStore переданным мидлвэром:
let store = createStore(reducer, applyMiddleware(thunk))

function fetchSecretSauce() {
  return fetch('https://www.google.com/search?q=secret+sauce')
}

//Это такие же обычные генераторы действий, которые вы видели ранее.
//Действия, которые они возвращают, могут быть переданы в `dispatch` без каких-либо мидлвэров.
//Тем не менее, они отражают только "факты", но не "асинхронный flow"

function makeASandwich(forPerson, secretSauce) {
  return {
    type: 'MAKE_SANDWICH',
    forPerson,
    secretSauce
  }
}

function apologize(fromPerson, toPerson, error) {
  return {
    type: 'APOLOGIZE',
    fromPerson,
    toPerson,
    error
  }
}

function withdrawMoney(amount) {
  return {
    type: 'WITHDRAW',
    amount
  }
}

// Мы можем диспатчить событие даже без мидлвера
store.dispatch(withdrawMoney(100))

// Но что, если вам нужно запустить асинхронную операцию,
// такую, как вызов API или переход в роутере?

// Встречайте `преобразователи` (thunks).
// Преобразователь - это всего лишь функция, возвращающая функцию.
// Вот пример преобразователя:

function makeASandwichWithSecretSauce(forPerson) {

  // Инвертируем управление!
  // Возвращаем функцию, которая принимает `dispatch` как аргумент, чтобы мы могли её вызвать позже.
  // Мидлвэр-преобразователь знает, как нужно конвертировать такие асинхронные действия в стандартные.

  return function (dispatch) {
    return fetchSecretSauce().then(
      sauce => dispatch(makeASandwich(forPerson, sauce)),
      error => dispatch(apologize('The Sandwich Shop', forPerson, error))
    )
  }
}

// Мидлвэр-преобразователь позволяет диспатчить асинхронные функции так,
// как будто это обычные события!

store.dispatch(
  makeASandwichWithSecretSauce('Me')
)

// Мидлвэр даже возвращает результат вашей функции из dispatch, поэтому можно создавать цепочки Promise, если вы их возвращаете.

store.dispatch(
  makeASandwichWithSecretSauce('My wife')
).then(() => {
  console.log('Done!')
})

// Фактически, можно даже писать генераторы событий, которые диспатчат обычные и асинхронные события из других генераторов событий, 
// и, таким образом, создавать полноценные потоки управления событиями с использованием Promise

function makeSandwichesForEverybody() {
  return function (dispatch, getState) {
    if (!getState().sandwiches.isShopOpen) {

      // Вы не обязаны возвращать Promise, но это хорошее соглашение, чтобы вызывающий мог всегда вызвать .then() на результате вашего `dispatch`
      
      return Promise.resolve()
    }

    // Мы можем диспатчить как обычные объекты событий, так и асинхронные функции-преобразователи одновременно,
    // что позволяем нам встраивать асинхронные события в единый поток событий.

    return dispatch(
      makeASandwichWithSecretSauce('My Grandma')
    ).then(() =>
      Promise.all([
        dispatch(makeASandwichWithSecretSauce('Me')),
        dispatch(makeASandwichWithSecretSauce('My wife'))
      ])
    ).then(() =>
      dispatch(makeASandwichWithSecretSauce('Our kids'))
    ).then(() =>
      dispatch(getState().myMoney > 42 ?
        withdrawMoney(42) :
        apologize('Me', 'The Sandwich Shop')
      )
    )
  }
}

// Это очень полезно для server-side рендеринда, т.к. мы можем дождаться получения данных, а после синхронно отрендерить приложение.

import { renderToString } from 'react-dom/server'

store.dispatch(
  makeSandwichesForEverybody()
).then(() =>
  response.send(renderToString(<MyApp store={store} />))
)

// Можно также диспатчить асинхронный генератор действий прямо из компонента при изменении его `props`
// для получения недостающих данных.

import { connect } from 'react-redux'
import { Component } from 'react'

class SandwichShop extends Component {
  componentDidMount() {
    this.props.dispatch(
      makeASandwichWithSecretSauce(this.props.forPerson)
    )
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.forPerson !== this.props.forPerson) {
      this.props.dispatch(
        makeASandwichWithSecretSauce(nextProps.forPerson)
      )
    }
  }

  render() {
    return <p>{this.props.sandwiches.join('mustard')}</p>
  }
}

export default connect(
  state => ({
    sandwiches: state.sandwiches
  })
)(SandwichShop)
```

#### Советы

* Мидлвэры всего лишь оборачивают метод хранилища [`dispatch`](Store.md#dispatch). Технически, вы можете воспроизвести это поведение, оборачивая каждый вызов `dispatch` вручную, но гораздо проще управлять этим из единого места и устанавливать трансформации действий во всём приложении одновременно.

* Если вы используете другие расширители хранилища, помимо `applyMiddleware`, убедитесь, что вы расположили `applyMiddleware` перед ними в цепочке преобразований, поскольку мидлвэры потенциально могут быть асинхронными. Например, он должен быть установлен перед [redux-devtools](https://github.com/gaearon/redux-devtools) иначе DevTools не увидит _сырые_ события, сгенерированные мидлвэром Promise middleware и ему подобными.

* Если вы ходите применять мидлвэр по условию, убедитесь, что он импортируется только тогда, когда он необходим:

  ```js
  let middleware = [ a, b ]
  if (process.env.NODE_ENV !== 'production') {
    let c = require('some-debug-middleware')
    let d = require('another-debug-middleware')
    middleware = [ ...middleware, c, d ]
  }

  const store = createStore(
    reducer,
    preloadedState,
    applyMiddleware(...middleware)
  )
  ```

  Это позволяет инструментам сборки эффективно удалять неиспользуемый код из сборки и уменьшать их размер.

* Никогда не задумывались, что из себя представляет `applyMiddleware`? Он должен быть более мощным механизмом расширения, чем сами мидлвэры. И действительно, `applyMiddleware` является примером наиболее мощного механизма расширения Redux, который называется [расширители хранилища (store enhancers)](../Glossary.md#store-enhancer). Достаточно маловероятно, что вам когда-либо придётся самостоятельно писать расширитель хранилища. Примером такого расширителя является [redux-devtools](https://github.com/gaearon/redux-devtools). Мидлвэр менее мощный, чем расширитель хранилища, но его проще написать.

* Мидлвэры представляются гораздо сложнее, чем они есть на самом деле. Единственный способ действительно понять мидлвэр - это увидеть, как работают уже существующие, и попробовать написать собственный. Множественная вложенность функций может выглядеть пугающем, но большинство написанных мидлвэров, фактически, содержат не больше 10 строк кода, а вложенность и компонуемость - это как раз то, что делает систему мидлвэров такой мощной.

* Вы можете использовать [`compose()`](./compose.md) для применения нескольких расширителей хранилища одновременно.
