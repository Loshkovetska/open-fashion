<script setup lang="ts">
import HeadLine2 from '@/components/common/headline2-comp.vue'
import Triangle from '@/components/icons/triange-icon.vue'
import { cn } from '@/lib/utils'
import { ref, useTemplateRef, watch } from 'vue'

const isPlaying = ref(false)
const showBtn = ref(false)
const videoRef = useTemplateRef<HTMLVideoElement>('videoRef')

watch(isPlaying, () => {
  const video = videoRef.value
  if (!video) return
  if (isPlaying.value) {
    video.play()
    return
  }
  video.pause()
})

const onMouseEnter = () => (showBtn.value = true)
const onMouseLeave = () => (showBtn.value = false)
</script>

<template>
  <section class="py-16 max-w-[1280px] mx-auto">
    <HeadLine2>Collections</HeadLine2>
    <img
      src="https://img.freepik.com/free-photo/seductive-girl-wearing-distressed-jeans-denim-jacket-looking-camera-while-sitting-chair-fitting-room-clothing-store_613910-20033.jpg?t=st=1734341702~exp=1734345302~hmac=d31b7d63f563382aac51a113057b2bc119e24f1783db9248854ea2436c21fb69&w=2000"
      alt="Frame-2"
      class="w-full mt-4 object-cover"
      width="300"
      height="200"
    />
    <div class="flex justify-center mt-10 px-10">
      <img
        src="https://img.freepik.com/free-photo/seductive-girl-wearing-distressed-jeans-denim-jacket-looking-camera-while-sitting-chair-fitting-room-clothing-store_613910-20033.jpg?t=st=1734341702~exp=1734345302~hmac=d31b7d63f563382aac51a113057b2bc119e24f1783db9248854ea2436c21fb69&w=2000"
        alt="image-9"
        class="mx-auto w-full max-w-[700px]"
        width="300"
        height="200"
      />
    </div>
    <div class="w-full mt-10 relative flex" @mouseenter="onMouseEnter" @mouseleave="onMouseLeave">
      <div
        @click="isPlaying = !isPlaying"
        :class="
          cn(
            'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[1] w-[32px] h-[32px] bg-[#00000080] rounded-full flex justify-center items-center cursor-pointer transition-all',
            (isPlaying && showBtn) || !isPlaying ? 'opacity-100' : 'opacity-0',
          )
        "
      >
        <Triangle />
      </div>
      <video
        ref="videoRef"
        class="w-full"
        src="https://media.istockphoto.com/id/1405904559/uk/%D0%B2%D1%96%D0%B4%D0%B5%D0%BE/%D0%B0%D0%B7%D1%96%D0%B0%D1%82%D1%81%D1%8C%D0%BA%D1%96-%D0%B6%D1%96%D0%BD%D0%BA%D0%B8-%D0%B4%D0%B8%D0%B7%D0%B0%D0%B9%D0%BD%D0%B5%D1%80%D0%B8-%D0%BC%D0%BE%D0%B4%D0%B8-%D0%BF%D1%80%D0%BE%D0%B4%D0%B0%D1%8E%D1%82%D1%8C-%D0%BE%D0%B4%D1%8F%D0%B3-%D0%B2-%D1%96%D0%BD%D1%82%D0%B5%D1%80%D0%BD%D0%B5%D1%82%D1%96-%D0%B2%D0%B8%D0%BA%D0%BE%D1%80%D0%B8%D1%81%D1%82%D0%BE%D0%B2%D1%83%D1%8E%D1%87%D0%B8-%D0%BF%D0%BB%D0%B0%D0%BD%D1%88%D0%B5%D1%82%D0%B8-%D0%B2%D0%B7%D0%B0%D1%94%D0%BC%D0%BE%D0%B4%D1%96%D1%8E%D1%87%D0%B8.mp4?s=mp4-640x640-is&k=20&c=1nYb1ENZTnZMLDmmX3Gs4puzdLwFk0IzUFNZNw5CDyE="
      >
        <source
          src="https://media.istockphoto.com/id/1405904559/uk/%D0%B2%D1%96%D0%B4%D0%B5%D0%BE/%D0%B0%D0%B7%D1%96%D0%B0%D1%82%D1%81%D1%8C%D0%BA%D1%96-%D0%B6%D1%96%D0%BD%D0%BA%D0%B8-%D0%B4%D0%B8%D0%B7%D0%B0%D0%B9%D0%BD%D0%B5%D1%80%D0%B8-%D0%BC%D0%BE%D0%B4%D0%B8-%D0%BF%D1%80%D0%BE%D0%B4%D0%B0%D1%8E%D1%82%D1%8C-%D0%BE%D0%B4%D1%8F%D0%B3-%D0%B2-%D1%96%D0%BD%D1%82%D0%B5%D1%80%D0%BD%D0%B5%D1%82%D1%96-%D0%B2%D0%B8%D0%BA%D0%BE%D1%80%D0%B8%D1%81%D1%82%D0%BE%D0%B2%D1%83%D1%8E%D1%87%D0%B8-%D0%BF%D0%BB%D0%B0%D0%BD%D1%88%D0%B5%D1%82%D0%B8-%D0%B2%D0%B7%D0%B0%D1%94%D0%BC%D0%BE%D0%B4%D1%96%D1%8E%D1%87%D0%B8.mp4?s=mp4-640x640-is&k=20&c=1nYb1ENZTnZMLDmmX3Gs4puzdLwFk0IzUFNZNw5CDyE="
        />
      </video>
    </div>
  </section>
</template>
