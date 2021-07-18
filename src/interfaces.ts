export interface ITodo {
  todoText: string
  id: number
  completed: boolean
  isImportant: boolean
}
export interface ITodoFormProps {
  onAddTodo(todoText: string): void
}

export interface ITodoListProps {
  todos: ITodo[]
  onToggle: (id: number) => void
  handleClickDeleteIcon: (id: number) => void
  onTogglePriority: (id: number) => void
}

export interface ITodoProps {
  id: number
  completed: boolean
  todoText: string
  isImportant: boolean
  onToggle: (id: number) => void
  handleClickDeleteIcon: (id: number) => void
  onTogglePriority: (id: number) => void
}

export interface IMainPageProps {
  handleAddTodo: (todoText: string) => void
  toggleTodo: (id: number) => void
  handleClickDeleteIcon: (id: number) => void
  togglePriority: (id: number) => void
  setFilteredListToState: (filteredList: ITodo[], isFilteredNewValue: boolean) => void
  isFiltered: boolean
}

export interface IFilterPanelProps {
   setFilteredListToState: (filteredList: ITodo[], isFilteredNewValue: boolean) => void
}