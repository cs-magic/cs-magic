import React from 'react'
import { useFormContext } from 'react-hook-form'
import { Input } from './ui/input'
import { Label } from './ui/label'

type FormInputProps = {
	label: string;
	name: string;
	type?: string;
};

const FormInput: React.FC<FormInputProps> = ({
	                                             label,
	                                             name,
	                                             type = 'text',
                                             }) => {
	const {
		register,
		formState: { errors },
	} = useFormContext()
	return (
		<div className="">
			<Label htmlFor={name} className="block text-ct-blue-600 mb-3">
				{label}
			</Label>
			<Input
				type={type}
				placeholder=" "
				className="block w-full rounded-2xl appearance-none focus:outline-none py-2 px-4"
				{...register(name)}
			/>
			{errors[name] && (
				<span className="text-red-500 text-xs pt-1 block">
          {errors[name]?.message as unknown as string}
        </span>
			)}
		</div>
	)
}

export default FormInput
