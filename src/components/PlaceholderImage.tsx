import React, { CSSProperties } from "react";

// Define the types for the component's props
interface PlaceholderImageProps {
  width?: number; // Width of the placeholder image
  height?: number; // Height of the placeholder image
  text?: string; // Main text to display on the placeholder
  subText?: string; // Optional secondary text
  bgColor?: string; // Background color for the main shape (circle or rectangle) or pattern base
  outerBackgroundColor?: string; // New: Background color for the SVG canvas outside the main shape
  textColor?: string; // Color of the main text
  subTextColor?: string; // Color of the sub-text
  // Defines the type of background pattern, now including specific sport themes
  pattern?:
    | "gradient"
    | "dots"
    | "diagonal"
    | "waves"
    | "none"
    | "custom-svg"
    | "football-field"
    | "basketball-court"
    | "tennis-court"
    | "swimming-pool" // Original sport patterns
    | "geometric-soccer"
    | "dynamic-hoops"
    | "abstract-racket"
    | "fluid-lanes"
    | "track-speed"
    | "cycling-circuit"
    | "golf-swing" // Sleek patterns
    | "motion-grid"
    | "glitch-effect"
    | "speed-lines"
    | "hex-grid"
    | "circuit-board"; // Ultra-sleek patterns
  className?: string; // Optional CSS class for the SVG element
  style?: CSSProperties; // Optional inline style for the SVG element
  fontFamily?: string; // Font family for the displayed text
  svgContent?: string; // Raw SVG string content to be used as a custom pattern
  svgPatternWidth?: number; // Width of a single tile in the custom SVG pattern
  svgPatternHeight?: number; // Height of a single tile in the custom SVG pattern
  patternOpacity?: number; // Opacity of the background pattern (0 to 1)
  borderRadius?: number; // Border radius for the main rectangle (ignored for circle)
  shape?: "rectangle" | "circle"; // New: Shape of the main placeholder area
  mainShapeBorderColor?: string; // New: Color of the border around the main shape
  mainShapeBorderWidth?: number; // New: Width of the border around the main shape
  mainTextHorizontalAlign?: "start" | "middle" | "end"; // Horizontal alignment for main text
  mainTextVerticalAlign?: 
            | "auto"
            | "use-script"
            | "no-change"
            | "reset-size"
            | "ideographic"
            | "alphabetic"
            | "hanging"
            | "mathematical"
            | "central"
            | "middle"
            | "text-after-edge"
            | "text-before-edge"
            | "inherit"
            | undefined; // Vertical alignment for main text
  mainTextFontSize?: number; // New: Explicit font size for main text
  subTextFontSize?: number; // Font size for sub-text
  subTextPosition?: "top-left" | "top-right" | "bottom-left" | "bottom-right"; // Position for sub-text
  iconSvgContent?: string; // SVG content for an overlay icon
  iconSize?: number; // Size of the overlay icon
  gradientStartColor?: string; // Start color for gradient pattern
  gradientEndColor?: string; // End color for gradient pattern
  gradientDirection?:
    | "to top"
    | "to right"
    | "to bottom"
    | "to left"
    | "to top right"
    | "to bottom right"
    | "to bottom left"
    | "to top left"; // Direction for gradient
  isLoading?: boolean; // If true, shows a loading shimmer effect
  isError?: boolean; // If true, shows an error state
  onClick?: () => void; // Optional click handler for the SVG
}

const PlaceholderImage: React.FC<PlaceholderImageProps> = React.memo(
  ({
    width = 400,
    height = 200,
    text = "Placeholder",
    subText,
    bgColor = "#1a202c",
    outerBackgroundColor = "transparent",
    textColor = "#ffffff",
    subTextColor = "#cccccc",
    pattern = "gradient",
    className = "",
    style = {},
    fontFamily = "system-ui, -apple-system, sans-serif",
    svgContent,
    svgPatternWidth = 100,
    svgPatternHeight = 100,
    patternOpacity = 1,
    borderRadius = 8,
    shape = "rectangle",
    mainShapeBorderColor = "none",
    mainShapeBorderWidth = 0,
    mainTextHorizontalAlign = "middle",
    mainTextVerticalAlign = "middle",
    mainTextFontSize,
    subTextFontSize,
    subTextPosition = "bottom-left",
    iconSvgContent,
    iconSize = 40,
    gradientStartColor,
    gradientEndColor,
    gradientDirection = "to bottom right",
    isLoading = false,
    isError = false,
    onClick,
  }) => {
    const baseFontSize = Math.min(width, height) * 0.1;
    const currentMainFontSize =
      mainTextFontSize || Math.max(12, Math.min(baseFontSize, 48));
    const currentSubTextFontSize =
      subTextFontSize || Math.max(8, Math.min(baseFontSize * 0.3, 24));
    const generatePattern = () => {
      const patternId = `pattern-${Math.random().toString(36).substr(2, 9)}`;
      const shimmerId = `shimmer-${Math.random().toString(36).substr(2, 9)}`;
      let currentSvgContent = svgContent;
      let currentSvgPatternWidth = svgPatternWidth;
      let currentSvgPatternHeight = svgPatternHeight;
      let currentBgColor = bgColor;
      if (isError) {
        currentBgColor = "#DC2626";
        return { defs: "", fill: currentBgColor };
      }
      if (isLoading) {
        return {
          defs: `<linearGradient id="${shimmerId}" x1="-20%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stop-color="${bgColor}" /><stop offset="50%" stop-color="${textColor}" stop-opacity="0.2" /><stop offset="100%" stop-color="${bgColor}" /><animate attributeName="x1" from="-20%" to="100%" dur="1.5s" repeatCount="indefinite" /><animate attributeName="x2" from="0%" to="120%" dur="1.5s" repeatCount="indefinite" /></linearGradient>`,
          fill: `url(#${shimmerId})`,
        };
      }
      let gradientX1 = "0%",
        gradientY1 = "0%",
        gradientX2 = "100%",
        gradientY2 = "100%";
      switch (gradientDirection) {
        case "to top":
          gradientY2 = "0%";
          break;
        case "to right":
          gradientX1 = "0%";
          gradientY1 = "0%";
          gradientX2 = "100%";
          gradientY2 = "0%";
          break;
        case "to bottom":
          gradientY1 = "0%";
          break;
        case "to left":
          gradientX1 = "100%";
          gradientX2 = "0%";
          break;
        case "to top right":
          gradientX1 = "0%";
          gradientY1 = "100%";
          gradientX2 = "100%";
          gradientY2 = "0%";
          break;
        case "to bottom left":
          gradientX1 = "100%";
          gradientY1 = "0%";
          gradientX2 = "0%";
          gradientY2 = "100%";
          break;
        case "to top left":
          gradientX1 = "100%";
          gradientY1 = "100%";
          gradientX2 = "0%";
          gradientY2 = "0%";
          break;
      }
      const patternLineColor = textColor;
      switch (pattern) {
        case "gradient":
          return {
            defs: `<linearGradient id="${patternId}" x1="${gradientX1}" y1="${gradientY1}" x2="${gradientX2}" y2="${gradientY2}"><stop offset="0%" style="stop-color:${
              gradientStartColor || bgColor
            };stop-opacity:1" /><stop offset="100%" style="stop-color:${
              gradientEndColor || patternLineColor
            };stop-opacity:${0.3 * patternOpacity}" /></linearGradient>`,
            fill: `url(#${patternId})`,
          };
        case "dots":
          return {
            defs: `<pattern id="${patternId}" patternUnits="userSpaceOnUse" width="30" height="30"><rect width="30" height="30" fill="${bgColor}" opacity="${patternOpacity}"/><circle cx="15" cy="15" r="3" fill="${patternLineColor}" opacity="${
              0.3 * patternOpacity
            }"/></pattern>`,
            fill: `url(#${patternId})`,
          };
        case "diagonal":
          return {
            defs: `<pattern id="${patternId}" patternUnits="userSpaceOnUse" width="20" height="20"><rect width="20" height="20" fill="${bgColor}" opacity="${patternOpacity}"/><path d="m 0,20 l 20,-20 M -5,5 l 10,-10 M 15,25 l 10,-10" stroke="${patternLineColor}" stroke-width="1" opacity="${
              0.2 * patternOpacity
            }"/></pattern>`,
            fill: `url(#${patternId})`,
          };
        case "waves":
          return {
            defs: `<pattern id="${patternId}" patternUnits="userSpaceOnUse" width="60" height="30"><rect width="60" height="30" fill="${bgColor}" opacity="${patternOpacity}"/><path d="M0,15 Q15,5 30,15 T60,15" stroke="${patternLineColor}" stroke-width="2" fill="none" opacity="${
              0.3 * patternOpacity
            }"/></pattern>`,
            fill: `url(#${patternId})`,
          };
        case "dynamic-hoops":
          currentBgColor = "#2D3748";
          currentSvgPatternWidth = 80;
          currentSvgPatternHeight = 80;
          currentSvgContent = `<rect width="80" height="80" fill="${currentBgColor}" opacity="${patternOpacity}"/><path d="M0,40 Q20,10 40,40 T80,40" fill="none" stroke="#F56565" stroke-width="2" opacity="${
            0.6 * patternOpacity
          }"/><path d="M0,50 Q20,20 40,50 T80,50" fill="none" stroke="#F56565" stroke-width="1" opacity="${
            0.3 * patternOpacity
          }"/><circle cx="40" cy="40" r="10" fill="#F56565" opacity="${
            0.1 * patternOpacity
          }"/>`;
          break;
        case "motion-grid":
          currentBgColor = "#121212";
          currentSvgPatternWidth = 120;
          currentSvgPatternHeight = 120;
          currentSvgContent = `<rect width="120" height="120" fill="${currentBgColor}" opacity="${patternOpacity}"/><line x1="0" y1="0" x2="120" y2="120" stroke="#00C8FF" stroke-width="1" opacity="${
            0.2 * patternOpacity
          }"/><line x1="120" y1="0" x2="0" y2="120" stroke="#00C8FF" stroke-width="1" opacity="${
            0.2 * patternOpacity
          }"/><circle cx="60" cy="60" r="30" fill="none" stroke="#00C8FF" stroke-width="0.5" opacity="${
            0.1 * patternOpacity
          }"/><path d="M0,60 C30,30 90,90 120,60" fill="none" stroke="#00C8FF" stroke-width="1.5" opacity="${
            0.4 * patternOpacity
          }"/>`;
          break;
        case "circuit-board":
          currentBgColor = "#000000";
          currentSvgPatternWidth = 100;
          currentSvgPatternHeight = 100;
          currentSvgContent = `<rect width="100" height="100" fill="${currentBgColor}" opacity="${patternOpacity}"/><line x1="0" y1="10" x2="100" y2="10" stroke="#00FFFF" stroke-width="1" opacity="${
            0.2 * patternOpacity
          }"/><line x1="0" y1="30" x2="100" y2="30" stroke="#00FFFF" stroke-width="0.8" opacity="${
            0.15 * patternOpacity
          }"/><line x1="0" y1="50" x2="100" y2="50" stroke="#00FFFF" stroke-width="1" opacity="${
            0.2 * patternOpacity
          }"/><line x1="0" y1="70" x2="100" y2="70" stroke="#00FFFF" stroke-width="0.8" opacity="${
            0.15 * patternOpacity
          }"/><line x1="0" y1="90" x2="100" y2="90" stroke="#00FFFF" stroke-width="1" opacity="${
            0.2 * patternOpacity
          }"/><circle cx="20" cy="10" r="3" fill="#00FFFF" opacity="${
            0.4 * patternOpacity
          }"/><circle cx="80" cy="50" r="3" fill="#00FFFF" opacity="${
            0.4 * patternOpacity
          }"/><circle cx="40" cy="90" r="3" fill="#00FFFF" opacity="${
            0.4 * patternOpacity
          }"/>`;
          break;
        case "custom-svg":
          if (!currentSvgContent) {
            console.warn(
              "Pattern 'custom-svg' selected but no 'svgContent' provided. Falling back to 'none' pattern."
            );
            return { defs: "", fill: bgColor };
          }
          break;
        case "none":
        default:
          return { defs: "", fill: bgColor };
      }
      return {
        defs: `<pattern id="${patternId}" patternUnits="userSpaceOnUse" width="${currentSvgPatternWidth}" height="${currentSvgPatternHeight}"><rect width="${currentSvgPatternWidth}" height="${currentSvgPatternHeight}" fill="${currentBgColor}" opacity="${patternOpacity}"/>${currentSvgContent}</pattern>`,
        fill: `url(#${patternId})`,
      };
    };

    type WrapLinesProps = {
      textToWrap: string;
      maxWidth: number;
      fontSize: number;
    };

    const wrapLines = ({ textToWrap, maxWidth, fontSize }: WrapLinesProps) => {
      if (!textToWrap) return [];
      const avgCharWidth = fontSize * 0.55;
      const maxCharsPerLine = Math.floor(maxWidth / avgCharWidth);
      const words = textToWrap.split(" ");
      const lines = [];
      let currentLine = "";
      for (const word of words) {
        if (
          (currentLine + " " + word).length > maxCharsPerLine &&
          currentLine.length > 0
        ) {
          lines.push(currentLine.trim());
          currentLine = word;
        } else {
          currentLine = currentLine ? `${currentLine} ${word}` : word;
        }
      }
      lines.push(currentLine.trim());
      return lines;
    };

    const { defs, fill } = generatePattern();
    let mainTextX = "50%";
    const mainTextY = "50%";
    switch (mainTextHorizontalAlign) {
      case "start":
        mainTextX = "10%";
        break;
      case "end":
        mainTextX = "90%";
        break;
    }
    let subTextX = 0,
      subTextY = 0;
    let subTextAnchor: "start" | "middle" | "end" = "start";
    let subTextDominantBaseline:
      | "auto"
      | "text-top"
      | "central"
      | "middle"
      | "text-bottom"
      | "hanging"
      | "ideographic" = "ideographic";
    switch (subTextPosition) {
      case "top-left":
        subTextX = 10;
        subTextY = 10;
        subTextAnchor = "start";
        subTextDominantBaseline = "hanging";
        break;
      case "top-right":
        subTextX = width - 10;
        subTextY = 10;
        subTextAnchor = "end";
        subTextDominantBaseline = "hanging";
        break;
      case "bottom-left":
        subTextX = 10;
        subTextY = height - 10;
        subTextAnchor = "start";
        subTextDominantBaseline = "ideographic";
        break;
      case "bottom-right":
        subTextX = width - 10;
        subTextY = height - 10;
        subTextAnchor = "end";
        subTextDominantBaseline = "ideographic";
        break;
    }
    const handleClick = () => {
      if (onClick) {
        onClick();
      }
    };
    const circleRadius = Math.min(width, height) / 2 - mainShapeBorderWidth / 2;
    const wrappedLines = wrapLines({
      textToWrap: text,
      maxWidth: width * 0.85,
      fontSize: currentMainFontSize,
    });
    const lineHeight = currentMainFontSize * 1.2;
    const totalTextHeight = (wrappedLines.length - 1) * lineHeight;

    return (
      <svg
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        className={className}
        style={{ ...style, cursor: onClick ? "pointer" : "default" }}
        role="img"
        aria-label={
          isError ? `Error: ${text}` : isLoading ? `Loading: ${text}` : text
        }
        onClick={handleClick}
      >
        <title>
          {isError ? `Error: ${text}` : isLoading ? `Loading: ${text}` : text}
        </title>
        <rect width="100%" height="100%" fill={outerBackgroundColor} />
        {defs && <defs dangerouslySetInnerHTML={{ __html: defs }} />}
        {shape === "rectangle" ? (
          <rect
            x={mainShapeBorderWidth / 2}
            y={mainShapeBorderWidth / 2}
            width={width - mainShapeBorderWidth}
            height={height - mainShapeBorderWidth}
            rx={borderRadius}
            ry={borderRadius}
            fill={fill}
            stroke={mainShapeBorderColor}
            strokeWidth={mainShapeBorderWidth}
          />
        ) : (
          <circle
            cx={width / 2}
            cy={height / 2}
            r={circleRadius}
            fill={fill}
            stroke={mainShapeBorderColor}
            strokeWidth={mainShapeBorderWidth}
          />
        )}
        {isError && (
          <text
            x="50%"
            y="50%"
            dominantBaseline="middle"
            textAnchor="middle"
            fill={textColor}
            fontSize={currentMainFontSize}
            fontWeight="bold"
            fontFamily={fontFamily}
          >
            Error
          </text>
        )}
        {isLoading && !isError && (
          <text
            x="50%"
            y="50%"
            dominantBaseline="middle"
            textAnchor="middle"
            fill={textColor}
            fontSize={currentMainFontSize}
            fontWeight="bold"
            fontFamily={fontFamily}
          >
            Loading...
          </text>
        )}
        {!isLoading && !isError && (
          <text
            x={mainTextX}
            y={mainTextY}
            dominantBaseline={mainTextVerticalAlign}
            textAnchor={mainTextHorizontalAlign}
            fill={textColor}
            fontSize={currentMainFontSize}
            fontWeight="600"
            fontFamily={fontFamily}
            transform={`translate(0, ${-totalTextHeight / 2})`}
          >
            {wrappedLines.map((line, index) => (
              <tspan
                x={mainTextX}
                dy={index === 0 ? 0 : lineHeight}
                key={index}
              >
                {line}
              </tspan>
            ))}
          </text>
        )}
        {subText && !isLoading && !isError && (
          <text
            x={subTextX}
            y={subTextY}
            dominantBaseline={subTextDominantBaseline}
            textAnchor={subTextAnchor}
            fill={subTextColor}
            fontSize={currentSubTextFontSize}
            opacity="0.8"
            fontFamily={fontFamily}
          >
            {subText}
          </text>
        )}
        {iconSvgContent && !isLoading && !isError && (
          <g
            dangerouslySetInnerHTML={{ __html: iconSvgContent }}
            transform={`translate(${width / 2 - iconSize / 2}, ${
              height / 2 - iconSize / 2
            }) scale(${iconSize / 24})`}
            fill={textColor}
          />
        )}
      </svg>
    );
  }
);
PlaceholderImage.displayName = "PlaceholderImage";

export default PlaceholderImage;
