interface DataType {
	id: number;
	name: string;
	uniqueId: string;
	status: string;
	lastUpdate: string;

	// children?: DataType[];
}

export type {DataType}