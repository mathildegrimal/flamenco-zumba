import React from 'react';
import { DastNode } from '../../types';

const renderSpan = (node: DastNode, key: number) => {
  let content: React.ReactNode = node.value;
  node.marks?.forEach((mark) => {
    if (mark === 'strong') content = <strong>{content}</strong>;
    else if (mark === 'emphasis') content = <em>{content}</em>;
    else if (mark === 'underline') content = <u>{content}</u>;
    else if (mark === 'code') content = <code>{content}</code>;
  });
  return <React.Fragment key={key}>{content}</React.Fragment>;
};

const renderNode = (node: DastNode, key: number): React.ReactNode => {
  const children = <DastNodes nodes={node.children} />;
  switch (node.type) {
    case 'span':
      return renderSpan(node, key);
    case 'paragraph':
      if (!node.children?.some((c) => c.value?.trim() || c.type !== 'span')) {
        return null;
      }
      return <p key={key}>{children}</p>;
    case 'heading': {
      const Tag = `h${Math.min(Math.max(node.level ?? 2, 1), 6)}` as 'h2';
      return <Tag key={key}>{children}</Tag>;
    }
    case 'list': {
      const Tag = node.style === 'numbered' ? 'ol' : 'ul';
      return <Tag key={key}>{children}</Tag>;
    }
    case 'listItem':
      return <li key={key}>{children}</li>;
    case 'blockquote':
      return <blockquote key={key}>{children}</blockquote>;
    case 'link':
      return (
        <a key={key} href={node.url} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      );
    case 'thematicBreak':
      return <hr key={key} />;
    default:
      return node.children ? (
        <React.Fragment key={key}>{children}</React.Fragment>
      ) : null;
  }
};

export default function DastNodes({ nodes }: { nodes?: DastNode[] }) {
  return <>{nodes?.map(renderNode)}</>;
}
