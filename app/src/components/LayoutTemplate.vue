<template>
    <div>
        <div class="min-h-full">
            <nav class="bg-gray-800">
                <div class="mx-auto max-w-7xl px-4">
                    <div class="flex h-16 items-center justify-between">
                        <div class="flex items-center">
                            <div class="flex-shrink-0">
                            </div>
                            <div class="hidden md:block">
                                <div class="flex items-baseline space-x-4">
                                    <span class="text-xl text-white px-3 py-2 text-sm font-medium mr-10">Example App</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
        
        
        <header class="bg-white shadow">
            <div class="flex mx-auto max-w-7xl px-4 py-6">
                <h1 class="text-3xl font-bold tracking-tight text-gray-900">Countdown list</h1>
                <div class="ml-auto">
                    <el-button type="primary" icon="el-icon-plus" @click.prevent="$emit('new')"></el-button>
                </div>
            </div>
        </header>
        <main>
            <div class="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
                <slot></slot>
            </div>
        </main>
    </div>
</template>