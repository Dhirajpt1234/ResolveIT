import { Fragment } from 'react'
import {
  BriefcaseIcon,
  CalendarIcon,
  CheckIcon,
  ChevronDownIcon,
  CurrencyDollarIcon,
  LinkIcon,
  MapPinIcon,
  PencilIcon,
} from '@heroicons/react/20/solid'
import { Menu, Transition } from '@headlessui/react'
import Navbar from '../../navbar/navbar'
import { useNavigate } from 'react-router-dom'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const people = [
    {
      name: 'Leslie Alexander',
      email: 'leslie.alexander@example.com',
      role: 'Co-Founder / CEO',
      imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      lastSeen: '3h ago',
      lastSeenDateTime: '2023-01-23T13:23Z',
    },
    {
      name: 'Michael Foster',
      email: 'michael.foster@example.com',
      role: 'Co-Founder / CTO',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      lastSeen: '3h ago',
      lastSeenDateTime: '2023-01-23T13:23Z',
    },
    {
      name: 'Dries Vincent',
      email: 'dries.vincent@example.com',
      role: 'Business Relations',
      imageUrl:
        'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      lastSeen: null,
    },
    {
      name: 'Lindsay Walton',
      email: 'lindsay.walton@example.com',
      role: 'Front-end Developer',
      imageUrl:
        'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      lastSeen: '3h ago',
      lastSeenDateTime: '2023-01-23T13:23Z',
    },
    {
      name: 'Courtney Henry',
      email: 'courtney.henry@example.com',
      role: 'Designer',
      imageUrl:
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      lastSeen: '3h ago',
      lastSeenDateTime: '2023-01-23T13:23Z',
    },
    {
      name: 'Tom Cook',
      email: 'tom.cook@example.com',
      role: 'Director of Product',
      imageUrl:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      lastSeen: null,
    },
  ]

export default function UserDashBoard() {
  const navigate = useNavigate();
  return (
    <>
    <Navbar></Navbar>
    <div className="max-w-7xl min-w-7xl m-auto p-2">
      <div className='flex flex-row'>
        <div className="min-w-0 flex-1">
            <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
                Dashboard
            </h2>
        </div>
        <div className="mt-5 flex lg:ml-4 lg:mt-0">
            <span className="hidden sm:block">
            <button
                type="button"
                className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                onClick={()=>{
                  navigate('/dashboard/raise-complaint',{ replace: true });
                }}
            >
                Raise Issue
            </button>
            </span>
        </div>
      </div>
      <div>
        <h6>Name</h6>
        <h6>Email</h6>
        <h6>Role</h6>
        <h6>State</h6>
        <h6>District</h6>
      </div>
      <div className="min-w-0 flex-1">
            <h2 className="text-xl text-center font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
                My Complaints
            </h2>
        </div>

      <div>
        <ul role="list" className="divide-y divide-gray-100">
        {people.map((person) => (
            <li key={person.email} className="flex justify-between gap-x-6 py-5">
                <div className="flex min-w-0 gap-x-4">
                    <p className="text-md font-semibold leading-6 text-gray-900">{person.name}</p>
                </div>
                <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                    <button>View</button>
                </div>
            </li>
        ))}
        </ul>
      </div>
    </div>
    </>
  )
}
