const jestConfig = {
	testPathIgnorePatterns: ['<rootDir>/node_modules/'],
	moduleNameMapper: {
		'^@/source/(.*)$': '<rootDir>/source/$1',
		'^@/pages/(.*)$': '<rootDir>/pages/$1',
		'^@/(.*)$': '<rootDir>/source/$1'
	},
	modulePaths: ['<rootDir>/']
}

module.exports = jestConfig
