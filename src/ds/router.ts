import React from 'react'

export type AuthMiddlewareProps = {
	children: React.ReactNode;
	requireAuth?: boolean;
	enableAuth?: boolean;
};
