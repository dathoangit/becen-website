import React, {useMemo, useState} from "react";
import {Space} from "antd";
import _ from "lodash";

type ITabs = React.HTMLAttributes<HTMLDivElement> & {
  tabs: { id: any, name: string, icon?: string, content: any }[]
}

const Component = (props: ITabs) => {
  const {tabs} = props
  const [tabSelected, setTabSelected] = useState<any>(tabs[0].id)

  const content = useMemo(() => {
    return tabs.find((tab) => {
      return tab.id === tabSelected
    })?.content
  }, [tabSelected, tabs])

  return <Space direction="vertical" className="w-full">
    <div className="flex gap-10">
      {
        tabs.map((tab) => {
          return <div
            className={`flex flex-1 p-10 rounded-2xl cursor-pointer ${tab.id === tabSelected ? 'bg-gradient-to-r from-cyan-500 to-blue-500' : 'bg-gray-400'}`}
            onClick={() => setTabSelected(tab.id)}
          >
            <div className="flex-1">
              {tab.icon && <img src={tab.icon} alt=""/>}
              {tab.name}
            </div>
            {
              tabSelected === tab.id ?
                <div className="rounded-full border-solid border-4 border-cyan-100 w-8 h-8 "/>
                :
                <div className="rounded-full border-solid border-2 border-gray-200 w-8 h-8 "/>
            }
          </div>
        })
      }
    </div>
    <div>
      {content}
    </div>
  </Space>
}

export const Tabs = React.memo(Component, _.isEqual)
