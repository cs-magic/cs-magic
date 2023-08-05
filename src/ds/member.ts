export enum MemberCategoryType {
	Founders = 'Founders',
	Core = 'Core',
	Advisory = 'Advisory',
	Community = 'Community',
}

export enum GenderType {
	man = 'man',
	woman = 'woman',
}

export interface IMemberBase {
	name: string
	gender: GenderType
	figure?: string
	category: MemberCategoryType
	title: string
	mail: string
}


