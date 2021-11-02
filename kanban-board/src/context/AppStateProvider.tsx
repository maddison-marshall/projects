import { createContext, FC, useState } from 'react'

type AppState = {
  lists: List[]
  getTasksByListId: (id: List['id']) => List['tasks'] | undefined
}

const lists = [
  {
    id: '0',
    text: 'To Do',
    tasks: [{ id: 'c0', text: 'Generate app scaffold' }],
  },
  {
    id: '1',
    text: 'In Progress',
    tasks: [{ id: 'c2', text: 'Learn Typescript' }],
  },
  {
    id: '2',
    text: 'Done',
    tasks: [{ id: 'c3', text: 'Begin to use static typing' }],
  },
]

export const AppStateContext = createContext<AppState>({} as AppState)

export const AppStateProvider: FC = ({ children }) => {
  const [state, setState] = useState(lists)

  const getTasksByListId = (id: List['id']) => {
    return state.find((list) => list.id == id)?.tasks
  }

  return (
    <AppStateContext.Provider
      value={{
        lists: state,
        getTasksByListId,
      }}
    >
      {children}
    </AppStateContext.Provider>
  )
}