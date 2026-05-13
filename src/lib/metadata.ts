import { env } from "@/env";
import type { OpenGraph, } from "next/dist/lib/metadata/types/opengraph-types";

export function sharedOG(props: OpenGraph): OpenGraph {
    const { title, ...rest } = props

    return {
        title: `${title as string} — ${env.NEXT_PUBLIC_BRAND}`,
        ...rest
    };
}