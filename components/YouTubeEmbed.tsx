'use client'

export default function YouTubeEmbed({ videoId }: { videoId: string }) {
  return (
    <div className="relative pb-[56.25%] h-0">
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?modestbranding=1`}
        title="YouTube video"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="absolute top-0 left-0 w-full h-full rounded-lg"
      />
    </div>
  )
}
