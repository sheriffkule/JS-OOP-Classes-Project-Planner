import { DOMHelper } from '../Utility/DOMHelper.js';
// import { Tooltip } from "./Tooltip.js";

export class ProjectItem {
	hasActiveTooltip = false;

	constructor(id, updateProjectListsFunction, type) {
		this.id = id;
		this.updateProjectListsHandler = updateProjectListsFunction;
		this.connectMoreInfoButton();
		this.connectSwitchButton(type);
		this.connectDrag();
	}

	showMoreInfoHandler() {
		if (this.hasActiveTooltip) {
			return;
		}
		const projectElement = document.getElementById(this.id);
		const tooltipText = projectElement.dataset.extraInfo;
		import('./Tooltip.js').then((module) => {
            const tooltip = new module.Tooltip(
				() => {
					this.hasActiveTooltip = false;
				},
				tooltipText,
				this.id
			);
			tooltip.attach();
			this.hasActiveTooltip = true;
		});
	}

	connectDrag() {
		const item = document.getElementById(this.id);
		item.addEventListener('dragstart', (event) => {
			event.dataTransfer.setData('text/plain', this.id);
			event.dataTransfer.effectAllowed = 'move';
		});

		item.addEventListener('dragend', (event) => {
			console.log(event);
		});
	}

	connectMoreInfoButton() {
		const projectItemElement = document.getElementById(this.id);
		const moreInfoButton = projectItemElement.querySelector(
			'button:first-of-type'
		);
		moreInfoButton.addEventListener(
			'click',
			this.showMoreInfoHandler.bind(this)
		);
	}

	connectSwitchButton(type) {
		const projectItemElement = document.getElementById(this.id);
		let switchButton = projectItemElement.querySelector(
			'button:last-of-type'
		);
		switchButton = DOMHelper.clearEventListeners(switchButton);
		switchButton.textContent = type === 'active' ? 'Finish' : 'Activate';
		switchButton.addEventListener(
			'click',
			this.updateProjectListsHandler.bind(null, this.id)
		);
	}

	update(updateProjectListFn, type) {
		this.updateProjectListsHandler = updateProjectListFn;
		this.connectSwitchButton(type);
	}
}
