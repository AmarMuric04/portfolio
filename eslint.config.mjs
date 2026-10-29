import pluginRouter from "@tanstack/eslint-plugin-router";
import prettierConfig from "eslint-config-prettier/flat";
import pluginReactRefresh from "eslint-plugin-react-refresh";
import pluginReactHooks from "eslint-plugin-react-hooks";
import unicornPlugin from "eslint-plugin-unicorn";
import pluginReact from "eslint-plugin-react";
import { defineConfig } from "eslint/config";
import tseslint from "typescript-eslint";
import nima from "eslint-plugin-nima";
import eslint from "@eslint/js";
import globals from "globals";

import { unicorn } from "./eslint/unicorn.js";

export default defineConfig([
	{
		ignores: ["dist", "**/ui/**/*", "**/*.gen.ts"],
	},

	eslint.configs.recommended,

	tseslint.configs.recommended.map((config) => ({
		...config,
		files: ["**/*.{ts,mts,cts,tsx}"],
	})),

	...pluginRouter.configs["flat/recommended"],

	{
		rules: {
			...unicorn.rules,
			"no-unused-vars": "off",
			"nima/prefer-arrow-functions": "error",
			"nima/no-handler-suffix": "error",
			"nima/no-optional-call-expression": "warn",
			"nima/params-naming-convention": [
				"error",
				{
					ignore: [
						"_",
						"ref",
						"data",
						"props",
						"state",
						"event",
						"index",
						"options",
					],
					ignorePrefixes: ["$", "_"],
					ignoreFunctions: ["map", "reduce"],
				},
			],
		},
		plugins: {
			nima,
			unicorn: unicornPlugin,
		},
	},

	{
		plugins: { "react-refresh": pluginReactRefresh },
		rules: {
			"react-refresh/only-export-components": [
				"error",
				{ allowConstantExport: true },
			],
		},
	},

	{
		...pluginReactHooks.configs["recommended-latest"],
		rules: {
			...pluginReactHooks.configs["recommended-latest"].rules,
			"react-hooks/exhaustive-deps": "off",
		},
	},

	{
		...nima.configs["flat/recommended"],
		rules: {
			...nima.configs["flat/recommended"].rules,
			"nima/restrict-console-methods": "off",
		},
	},

	{
		...pluginReact.configs.flat.recommended,
		rules: {
			...pluginReact.configs.flat.recommended.rules,
			"react/react-in-jsx-scope": "off",
			"react/prop-types": "off",
		},
	},

	{
		settings: {
			react: {
				version: "detect",
			},
		},
	},

	{
		languageOptions: {
			globals: { ...globals.browser, React: "readonly", JSX: "readonly" },
			parserOptions: {
				project: "tsconfig.json",
				tsconfigRootDir: import.meta.dirname,
			},
		},
		rules: {
			"nima/restrict-imports": [
				"error",
				[
					{
						allowImports: ["Route"],
						from: ["**/routes/**"],
						folders: ["**/pages/**"],
					},
				],
			],
			"nima/restrict-function-usage": [
				"error",
				[
					{
						allowFunctions: ["useSearch", "useParams"],
						folders: ["**/pages/**"],
					},
				],
			],
		},
	},

	{
		files: ["*.config.*", "eslint/**"],
		languageOptions: {
			globals: globals.node,
		},
	},

	{
		...prettierConfig,
		rules: {
			...prettierConfig.rules,
			curly: "error",
		},
	},
]);
