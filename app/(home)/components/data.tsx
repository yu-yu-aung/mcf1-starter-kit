import React from 'react'

const statsData = [
    {
        value: "$1.1+ trillion",
        label: "Total sales through our platform worldwide.",
    },
    {
        value: "175+ countries",
        label: "With businesses powered by our commerce engine.",
    },
];


const Data = () => {
    return (
        <div className='space-y-20 pb-40 text-foreground bg-background'>
            <div className='space-y-4'>
                <div className="text-4xl md:text-5xl font-[petrovFont] space-y-2">
                    <h1>The global platform</h1>
                    <h1>for commerce</h1>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {statsData.map((item, index) => (
                    <div
                        key={index}
                        className="bg-muted-foreground/5 p-12 flex flex-col justify-center rounded-none "
                   
                    >
                        <h3 className="text-4xl md:text-5xl font-light mb-4 tracking-tight">
                            {item.value}
                        </h3>
                        <p className="text-base opacity-50 md:text-lg max-w-xs">
                            {item.label}
                        </p>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default Data