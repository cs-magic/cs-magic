/**
 * If you want to enable locale keys typechecking and enhance IDE experience.
 *
 * Requires `resolveJsonModule:true` in your tsconfig.json.
 *
 * @link https://www.i18next.com/overview/typescript
 */
import 'i18next'
// resources.ts file is generated with `npm run toc`
import resources from './resources.ts'

import { LocaleNameSpace } from '@/ds/locales'

declare module 'i18next' {
	interface CustomTypeOptions {
		defaultNs: LocaleNameSpace.manufacture,
		resources: typeof resources
	}
}
