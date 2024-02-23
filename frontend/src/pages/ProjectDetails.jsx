import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'

export default function ProjectDetails() {
  const [open, setOpen] = useState(true)

  const cancelButtonRef = useRef(null)

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setOpen}>
        <div className="fixed inset-0 z-10  overflow-y-auto">
          <div className="flex items-end justify-center p-4 text-center sm:items-center sm:p-0">

              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">

                    <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                      <Dialog.Title as="h3" className="text-base text-center font-semibold leading-6 text-gray-900">
                        Project Details
                      </Dialog.Title>
                      <div className="mt-2">
                        <h3 className='text-center'>Project Title</h3>
                        <h3 className='text-gray-500'>State : State</h3>
                        <h3 className='text-gray-500'>City : City</h3>
                        <h3 className='text-gray-500'>Zip : Zip</h3>
                        <h2>Description : </h2>
                        <p className="text-md text-gray-500">
                          Are you sure you want to deactijsdf nmn m djk Loaperiam ipsum officia ea nesciunt, necessitaero voluptate? Voluptate doloremque deleniti molestias laudantium est reprehenderit molestiae architecto suscipit itaque nemo modi, debitis, voluptas, nulla aut repellat ab aperiam quis harum veniam saepe adipisci doloribus. Nemo iusto neque sint. Illo ipsam minima laboriosam temporibus eligendi! Pariatur earum facere perspiciatis dolorem ipsam ad, vitae dolore cum eaque libero eum. Obcaecati, vel, ea veniam accusantium earum iure mollitia expedita aspernatur, blanditiis aut delectus odio eligendi libero dignissimos molestias.vate your account? All of your data will be permanently
                          removed. This action cannot be undone.
                        </p>
                        <div>
                            <img src='https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg' className='w-[400px]'></img>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 flex gap-2 justify-center">
                  <button
                    type="button"
                    className="inline-flex w-full w-[30px] justify-center rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                    onClick={() => setOpen(false)}
                  >
                    Close
                  </button>

                </div>
              </Dialog.Panel>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
