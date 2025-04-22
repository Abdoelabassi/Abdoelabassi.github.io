import type { APIRoute } from "astro";

// In a real app, this would be connected to a database
let viewCounts: Record<string, number> = {};

export const post: APIRoute = async ({ request }) => {
  try {
    const { videoId } = await request.json();

    if (!videoId) {
      return new Response(JSON.stringify({ error: "Video ID is required" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    // Increment view count
    viewCounts[videoId] = (viewCounts[videoId] || 0) + 1;

    return new Response(
      JSON.stringify({
        success: true,
        views: viewCounts[videoId],
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    return new Response(JSON.stringify({ error: "Failed to count view" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
};

export const get: APIRoute = async ({ url }) => {
  const videoId = url.searchParams.get("videoId");

  if (!videoId) {
    return new Response(JSON.stringify({ error: "Video ID is required" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  return new Response(
    JSON.stringify({
      views: viewCounts[videoId] || 0,
    }),
    {
      status: 200,
      headers: { "Content-Type": "application/json" },
    }
  );
};
