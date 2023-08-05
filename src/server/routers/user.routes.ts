import { protectedProcedure, t } from '../createRouter'
import { getMeHandler } from '../controllers/user.controller'

const userRoutes = t.router({
	getMe: protectedProcedure.query(({ ctx }) => getMeHandler({ ctx })),
})

export default userRoutes
