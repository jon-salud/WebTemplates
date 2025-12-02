import React from 'react';

interface TextSegment {
  text: string;
  weight?: 'thin' | 'extralight' | 'light' | 'normal' | 'medium' | 'semibold' | 'bold' | 'extrabold' | 'black';
}

interface VariableWeightTextProps {
  segments: TextSegment[];
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span';
  className?: string;
}

const weightMap = {
  thin: 100,
  extralight: 200,
  light: 300,
  normal: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  extrabold: 800,
  black: 900,
};

const VariableWeightText: React.FC<VariableWeightTextProps> = ({
  segments,
  as: Component = 'span',
  className = '',
}) => {
  return (
    <Component className={className}>
      {segments.map((segment, index) => (
        <span
          key={index}
          style={{
            fontWeight: segment.weight ? weightMap[segment.weight] : 400,
          }}
        >
          {segment.text}
        </span>
      ))}
    </Component>
  );
};

export default VariableWeightText;
