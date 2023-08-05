export type IUser = {
	_id: string;
	id: string;
	email: string;
	name: string;
	role: string;
	photo: string;
	updatedAt: string;
	createdAt: string;
};

export interface IMemberBase {
	name: string
	figure?: string
	title?: string
	mail: string
	sign?: string
	gender?: string
	
}
