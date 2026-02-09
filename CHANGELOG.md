# Change Log

## [2026-01-02] - Core Fixes & Optimizations

### Added
- **Fixed-position alignment trick** in `PortalContent.tsx` to handle window see-through visuals.
- **`mounted` state** check for the system clock in `MenuBar.tsx` to prevent Next.js hydration mismatches.
- **Glass/Reflection overlays** on the Portal window for better realism.
- **`CHANGELOG.md`** (this file) to track project evolving for future collaborators.

### Changed
- **Z-Index Management**: Refactored `app/page.tsx` to use a relative z-index calculation system instead of a global counter. Added a safety reset if z-index exceeds 500.
- **MenuBar Layering**: Increased `MenuBar` z-index from `100` to `999` to ensure it always stays on top.
- **Portal Dynamic Support**: Refactored `PortalContent` to accept `wallpaper` and `wallpaperType` props, removing hardcoded image dependency.
- **Dock Thumbnail Rendering**: Optimized the Dock to avoid using video URLs as `img` sources, using a placeholder fallback instead.

### Fixed
- **Portal Stutter/Misalignment**: Replaced reactive `background-position` calculation with a CSS `fixed` position strategem which is more performant and perfectly aligned.
- **Clock Formatting Sync**: Ensured clock only renders on client to avoid server/client locale mismatches.
- **Broken Dock Images**: Handled missing video thumbnails gracefully.
