import React from 'react'

const CTA = () => {
  return (

<div class=" text- mr-9 ml-9 px-6 py-6 bg-primary-100 rounded-3xl lg:py-12 lg:px-12 xl:flex xl:items-center">
    <div class="xl:w-0 xl:flex-1">
        <h2 class="ml-5 text-4xl font-bold leading-8 tracking-tight text-white sm:text-4xl sm:leading-9">
            Ready to start?
        </h2>
        <p class="ml-5 max-w-3xl mt-3 text-lg leading-6 text-indigo-200">
        Let's get connected and discuss about your project and possible partnerships.
        </p>
    </div>
    <div class="mr-12 order-3 mt-5 w-full flex-shrink-0 sm:order-2 sm:mt-0 sm:w-auto">
    <a
              href="#"
              className="flex items-center justify-center rounded-lg border border-transparent bg-white px-16 py-2 text-md font-medium text-indigo-600 shadow-sm hover:bg-indigo-50"
            >
              Go!
            </a>
         
        </div>
    </div>

  )
}

export default CTA