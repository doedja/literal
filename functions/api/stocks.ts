interface Env {}

export const onRequestGet: PagesFunction<Env> = async (context) => {
  const url = new URL(context.request.url);
  const symbols = url.searchParams.get('symbols');

  if (!symbols) {
    return new Response(JSON.stringify({ error: 'Missing symbols parameter' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const symbolList = symbols.split(',').map((s) => s.trim()).filter(Boolean);
  const prices: Record<string, number | null> = {};

  await Promise.all(
    symbolList.map(async (symbol) => {
      try {
        const res = await fetch(
          `https://query1.finance.yahoo.com/v8/finance/chart/${encodeURIComponent(symbol)}?range=1d&interval=1d`,
          { headers: { 'User-Agent': 'Mozilla/5.0' } }
        );
        if (!res.ok) {
          prices[symbol] = null;
          return;
        }
        const data = await res.json() as any;
        prices[symbol] = data?.chart?.result?.[0]?.meta?.regularMarketPrice ?? null;
      } catch {
        prices[symbol] = null;
      }
    })
  );

  return new Response(JSON.stringify(prices), {
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, max-age=300',
      'Access-Control-Allow-Origin': '*',
    },
  });
};

export const onRequestOptions: PagesFunction<Env> = async () => {
  return new Response(null, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
};
