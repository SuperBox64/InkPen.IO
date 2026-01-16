# inkpen.io

A professional vector graphics editor for macOS, inspired by the classic FreeHand workflow. Built with SwiftUI and designed for precision illustration work.

## Features

### Drawing Tools
- **Pen Tool** - Create precise Bezier paths with full control over anchor points and handles
- **Direct Selection Tool** - Select and manipulate individual anchor points
  - Arrow key nudging for selected points
  - Option + Arrow for 1/10th fine-tuning
  - Move dialog support for precise point positioning
- **Selection Tool** - Select and transform entire shapes
  - Cmd+Click to select behind overlapping objects
  - Option+Click select behind for direct selection
  - Auto-select by paint/fill (FreeHand/Illustrator style)

### Transform & Alignment
- **Transform Controls** - Scale X, Scale Y, and Rotate fields in toolbar
- **Alignment Tools** - Align X and Align Y with anchor point preferences
- **Shift-Constrain** - Hold Shift during drag for constrained movement
- **Lock Support** - Lock shapes with visual indicator in transform box

### Path Operations
- **Offset Path** - Create parallel paths with configurable distance
  - Supports all document units (pixels, points, mm, cm, picas)
  - Handles negative offsets for inner contours
- **Bounding Box Rectangle** - Quick rectangle from selection bounds
- **Corner Radius** - Adjust corner radius on rectangles

### Groups & Layers
- **Modern Groups** - Full transform support (rotate, scale, shear)
- **Layers Panel** - Organize artwork with named layers
- **Guides Layer** - Dedicated layer for guide management
- **Rename Support** - Rename objects and groups directly

### Export
- **Native .inkpen Format** - Full-fidelity document format
- **SVG Export** - With embedded inkpen data for Autodesk compatibility
- **PDF Export** - High-quality vector PDF output
- **Image Import** - Support for multiple image formats

### Precision
- **Document Units** - Pixels, points, millimeters, centimeters, picas
- **Snap to Point** - Precise alignment with intelligent snapping
- **Zoom** - 25% to 16,000% zoom range
- **Fit to Page** - Quick view fitting with high zoom support

## Keyboard Shortcuts

| Action | Shortcut |
|--------|----------|
| Nudge | Arrow keys |
| Fine Nudge (1/10th) | Option + Arrow |
| Select Behind | Cmd + Click |
| Constrain Drag | Shift + Drag |

## System Requirements

- macOS (SwiftUI-based)
- Apple Silicon or Intel Mac

## File Formats

| Format | Extension | Description |
|--------|-----------|-------------|
| Ink Pen Document | .inkpen | Native format with full editability |
| SVG | .svg | Scalable Vector Graphics |
| PDF | .pdf | Portable Document Format |

## Version

- **Version:** 1.0
- **Build:** 29

## License

Copyright (c) inkpen.io. All rights reserved.
