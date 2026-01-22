import { visit } from 'unist-util-visit';

export function rehypeCopyButton() {
	//@ts-expect-error error of button
	return (tree) => {
		visit(tree, 'element', (node, index, parent) => {
			if (node.tagName === 'pre') {
				//@ts-expect-error error of children
				const codeNode = node.children.find((n) => n.tagName === 'code' && n.type === 'element');

				if (codeNode && parent && typeof index === 'number') {
					const rawCode = getTextContent(codeNode);

					const button = {
						type: 'element',
						tagName: 'button',
						properties: {
							className: ['copy-btn'],
							'data-code': rawCode,
							'aria-label': 'Copy to clipboard'
						},
						children: [
							{
								type: 'element',
								tagName: 'svg',
								properties: {
									xmlns: 'http://www.w3.org/2000/svg',
									width: '16',
									height: '16',
									viewBox: '0 0 24 24',
									fill: 'none',
									stroke: 'currentColor',
									'stroke-width': '2',
									'stroke-linecap': 'round',
									'stroke-linejoin': 'round',
									className: ['lucide', 'lucide-clipboard'] // Optional classes
								},
								children: [
									{
										type: 'element',
										tagName: 'rect',
										properties: { width: '8', height: '4', x: '8', y: '2', rx: '1', ry: '1' },
										children: []
									},
									{
										type: 'element',
										tagName: 'path',
										properties: {
											d: 'M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2'
										},
										children: []
									}
								]
							}
						]
					};

					const wrapper = {
						type: 'element',
						tagName: 'div',
						properties: {
							className: ['code-container'],
							style: 'position: relative;' // Essential for positioning the button
						},
						children: [button, node]
					};
					parent.children[index] = wrapper;
				}
			}
		});
	};
}

//@ts-expect-error error of cotent
function getTextContent(node) {
	if (node.type === 'text') return node.value;
	if (node.children) return node.children.map(getTextContent).join('');
	return '';
}
