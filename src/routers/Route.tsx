import { Constants } from 'constants/index'
import LayoutWeb from 'layouts'
import { Redirect, Route, RouteProps } from 'react-router-dom'

interface Props {
  isPrivate: boolean
  isLogin: boolean
}

export const RouteWrapper = ({ isLogin, isPrivate, ...props }: Props & RouteProps) => {
  if (!isPrivate && isLogin) return <Redirect to={Constants.route.HOME} />
  if (isPrivate && isLogin)
    return (
      <LayoutWeb>
        <Route {...props} />
      </LayoutWeb>
    )
  if (isPrivate && !isLogin) return <Redirect to={Constants.route.LOGIN} />
  return <Route {...props} />
}
