import React from 'react'
import { SearchIcon } from '@icons'
import { Input } from '@components'

const Search = () => {
  return (
    <div>
      <Input IconComponent={SearchIcon} placeholder="Kaynakları, hizmetleri ve belgeleri arayın" />
    </div>
  )
}

export default Search
