export default function Schedule() {
    return (
        <div class="bg-white py-20">
            <div class="max-w-7xl mx-auto text-center px-6">
                <h2 class="text-3xl font-bold text-gray-900 ">
                    Training Schedule
                </h2>
                <div class="mt-10 w-full max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
                    <div class="bg-orange-600 text-white text-left font-bold text-base p-4 grid grid-cols-4 text-center">
                        <div class="px-4">Time</div>
                        <div class="px-4">Monday</div>
                        <div class="px-4">Wednesday</div>
                        <div class="px-4">Friday</div>
                    </div>
                    <div class="divide-y divide-gray-200">
                        <div class="grid grid-cols-4 p-4">
                            <div class="px-4">09:00 - 11:00</div>
                            <div class="px-4">Junior Training</div>
                            <div class="px-4">Adult Beginners</div>
                            <div class="px-4">Elite Training</div>
                        </div>
                        <div class="grid grid-cols-4 p-4">
                            <div class="px-4">14:00 - 16:00</div>
                            <div class="px-4">Adult Advanced</div>
                            <div class="px-4">Junior Training</div>
                            <div class="px-4">Open Practice</div>
                        </div>
                        <div class="grid grid-cols-4 p-4">
                            <div class="px-4">18:00 - 20:00</div>
                            <div class="px-4">Elite Training</div>
                            <div class="px-4">Adult Advanced</div>
                            <div class="px-4">Tournament Prep</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}