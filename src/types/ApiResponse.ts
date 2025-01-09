export enum ApiResponse {
  InternalServerError = "Internal Server Error",
}

export type DynamicRouteSegmentConfig =
  | "auto"
  | "force-dynamic"
  | "error"
  | "force-static";

export type RuntimeRouteSegmentConfig = "nodejs" | "edge";
