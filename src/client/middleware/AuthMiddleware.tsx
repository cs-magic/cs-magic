import React from 'react'
import { useQueryClient } from '@tanstack/react-query'
import useStore from '../store'
import { trpc } from '../utils/trpc'
import { IUser } from '@/ds/user'
import { AuthMiddlewareProps } from '@/ds/router'
import { uri } from '../../config'

const AuthMiddleware: React.FC<AuthMiddlewareProps> = ({
	                                                       children,
	                                                       requireAuth,
	                                                       enableAuth,
                                                       }) => {
	const store = useStore()
	const queryClient = useQueryClient()
	const query = trpc.refreshAccessToken.useQuery(undefined, {
		enabled: false,
		retry: 1,
		onError(error: any) {
			store.setPageLoading(false)
			document.location.href = uri.auth.login
		},
		onSuccess(data: any) {
			store.setPageLoading(false)
			queryClient.refetchQueries(['users.me'])
		},
	})
	const { isLoading } = trpc.getMe.useQuery(undefined, {
		onSuccess: (data) => {
			store.setPageLoading(false)
			store.setAuthUser(data.data.user as unknown as IUser)
		},
		retry: 1,
		enabled: !!enableAuth,
		onError(error) {
			store.setPageLoading(false)
			if (error.message.includes('must be logged in')) {
				query.refetch({ throwOnError: true })
			} else {
				document.location.href = uri.auth.login
			}
		},
	})
	
	return <>{children}</>
}

export default AuthMiddleware
