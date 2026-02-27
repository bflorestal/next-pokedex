import { z } from "zod/v4";

// Schema for a named API resource (used in lists)
const NamedAPIResourceSchema = z.object({
  name: z.string(),
  url: z.string(),
});

// Schema for the PokeAPI paginated list response (/pokemon/?limit=...)
export const PokemonListResponseSchema = z.object({
  count: z.number(),
  next: z.nullable(z.string()),
  previous: z.nullable(z.string()),
  results: z.array(NamedAPIResourceSchema),
});

// Schema for the PokeAPI types list response (/type)
export const TypeListResponseSchema = z.object({
  results: z.array(NamedAPIResourceSchema),
});

// Schema for a Pokemon detail response (/pokemon/{name})
export const PokemonDetailSchema = z.object({
  id: z.number(),
  name: z.string(),
  height: z.number(),
  weight: z.number(),
  sprites: z.object({
    front_default: z.nullable(z.string()),
  }),
  stats: z.array(
    z.object({
      base_stat: z.number(),
      stat: z.object({ name: z.string() }),
    })
  ),
  types: z.array(
    z.object({
      type: z.object({ name: z.string() }),
    })
  ),
  moves: z.array(
    z.object({
      move: z.object({ name: z.string() }),
    })
  ),
});

// Schema for a type detail response (/type/{name})
export const TypeDetailResponseSchema = z.object({
  pokemon: z.array(
    z.object({
      pokemon: NamedAPIResourceSchema,
    })
  ),
});

// Schema for a favorite Pokemon stored in localStorage
export const FavoritePokemonSchema = z.object({
  id: z.number(),
  name: z.string(),
  sprites: z.object({
    front_default: z.nullable(z.string()),
  }),
});

// Inferred types
export type NamedAPIResource = z.infer<typeof NamedAPIResourceSchema>;
export type PokemonListResponse = z.infer<typeof PokemonListResponseSchema>;
export type TypeListResponse = z.infer<typeof TypeListResponseSchema>;
export type PokemonDetail = z.infer<typeof PokemonDetailSchema>;
export type TypeDetailResponse = z.infer<typeof TypeDetailResponseSchema>;
export type FavoritePokemon = z.infer<typeof FavoritePokemonSchema>;
