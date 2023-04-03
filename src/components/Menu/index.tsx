import { Menu, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

export default function Example({ title, navs = [] }: any) {
  return (
    <div className="text-right">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex w-full justify-center rounded-full border border-gray-700 hover:border-primary transition-all px-4 py-2 text-sm font-medium">
            {title}
            <ChevronDownIcon
              className="ml-2 -mr-1 h-5 w-5 text-violet-200 hover:text-violet-100"
              aria-hidden="true"
            />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1 ">
              {
                navs.map((item: any) => (
                  <Menu.Item key={item.label}>
                    {({ active }: any) => (
                      <button
                        onClick={item.onClick}
                        className={`flex justify-between ${
                          active ? 'bg-primary text-white' : 'text-gray-900'
                        } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                      >
                        {item.icon}
                        {item.label}
                      </button>
                    )}
                  </Menu.Item>
                ))
              }
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  )
}