import { ButtonHTMLAttributes } from "react";

export function Button({ children, className, ...props }: ButtonHTMLAttributes<HTMLButtonElement>) {
	return (
		<button className={`px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-gray-400 ${className}`} {...props}>
			{children}
		</button>
	);
}
