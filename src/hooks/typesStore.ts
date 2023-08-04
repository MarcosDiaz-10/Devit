import { useDispatch, type TypedUseSelectorHook, useSelector } from 'react-redux'

import { type AppDispatch, type RootState } from '../redux/store'

export const useAppDispatch = () => useDispatch<AppDispatch>()

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
