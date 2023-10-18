import { Switch } from 'react-router-dom'
import { getCookies } from 'utils/cookies'

import { RouteWrapper } from './Route'
import { allMenu } from './routes'

export const Routers = () => {
  const isLogin = Boolean(getCookies('accessToken'))

  return (
    <Switch>
      {allMenu.map(({ ...menu }, index) => {
        return (
          <RouteWrapper
            exact
            isPrivate={menu.isPrivate}
            isLogin={isLogin}
            path={menu.path}
            key={index}
          >
            {menu.element}
          </RouteWrapper>
        )
      })}
    </Switch>
  )
}
