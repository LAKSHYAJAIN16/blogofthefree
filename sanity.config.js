// The absolute minimum viable studio configuration
import { defineConfig } from 'sanity'
import {structureTool} from 'sanity/structure'
import {Card, Text} from '@sanity/ui'
import {DashboardIcon} from '@sanity/icons'
import { schema } from './sanity/schemaTypes'

const myCustomTool = () => {
    return {
      title: 'My Custom Tool',
      name: 'my-custom-tool', // localhost:3333/my-custom-tool
      icon: DashboardIcon,
      component: (props) => {}
    }
  }

export default defineConfig({
  projectId: "dv3tiz24",
  dataset: "production",
  schema : {
    types: schema.types
  },
  plugins: [structureTool()],
  tools: [myCustomTool()],
  name: "blogofthefree",
  title : "blogofthefree database"
})