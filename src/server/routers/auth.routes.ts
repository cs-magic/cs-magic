import {
	loginHandler,
	logoutHandler,
	refreshAccessTokenHandler,
	registerHandler,
} from '../controllers/auth.controller'
import { createUserSchema, loginUserSchema } from '../schema/user.schema'
import { t } from '../createRouter'

const authRoutes = t.router({
	registerUser: t.procedure
		.input(createUserSchema)
		.mutation(({ input }) => registerHandler({ input })),
	loginUser: t.procedure
		.input(loginUserSchema)
		.mutation(({ input, ctx }) => loginHandler({ input, ctx })),
	logoutUser: t.procedure.mutation(({ ctx }) => logoutHandler({ ctx })),
	refreshAccessToken: t.procedure.query(({ ctx }) =>
		refreshAccessTokenHandler({ ctx }),
	),
})

export default authRoutes
