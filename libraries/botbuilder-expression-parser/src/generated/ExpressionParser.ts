// Generated from ../Expression.g4 by ANTLR 4.6-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { ExpressionListener } from "./ExpressionListener";
import { ExpressionVisitor } from "./ExpressionVisitor";


export class ExpressionParser extends Parser {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly T__4 = 5;
	public static readonly T__5 = 6;
	public static readonly T__6 = 7;
	public static readonly T__7 = 8;
	public static readonly T__8 = 9;
	public static readonly T__9 = 10;
	public static readonly T__10 = 11;
	public static readonly T__11 = 12;
	public static readonly T__12 = 13;
	public static readonly T__13 = 14;
	public static readonly T__14 = 15;
	public static readonly T__15 = 16;
	public static readonly T__16 = 17;
	public static readonly T__17 = 18;
	public static readonly T__18 = 19;
	public static readonly T__19 = 20;
	public static readonly T__20 = 21;
	public static readonly T__21 = 22;
	public static readonly T__22 = 23;
	public static readonly T__23 = 24;
	public static readonly T__24 = 25;
	public static readonly T__25 = 26;
	public static readonly T__26 = 27;
	public static readonly T__27 = 28;
	public static readonly NUMBER = 29;
	public static readonly WHITESPACE = 30;
	public static readonly IDENTIFIER = 31;
	public static readonly NEWLINE = 32;
	public static readonly STRING = 33;
	public static readonly RULE_expression = 0;
	public static readonly RULE_primaryExpression = 1;
	public static readonly RULE_argsList = 2;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"expression", "primaryExpression", "argsList",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'!'", "'-'", "'+'", "'^'", "'*'", "'/'", "'%'", "'=='", "'!='", 
		"'<>'", "'&'", "'<'", "'<='", "'>'", "'>='", "'&&'", "'||'", "'('", "')'", 
		"'#'", "'@'", "'@@'", "'$'", "'~'", "'.'", "'['", "']'", "','",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, "NUMBER", "WHITESPACE", "IDENTIFIER", "NEWLINE", "STRING",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(ExpressionParser._LITERAL_NAMES, ExpressionParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return ExpressionParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "Expression.g4"; }

	// @Override
	public get ruleNames(): string[] { return ExpressionParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return ExpressionParser._serializedATN; }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(ExpressionParser._ATN, this);
	}
	public expression(): ExpressionContext;
	public expression(_p: number): ExpressionContext;
	// @RuleVersion(0)
	public expression(_p?: number): ExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: ExpressionContext = new ExpressionContext(this._ctx, _parentState);
		let _prevctx: ExpressionContext = _localctx;
		let _startState: number = 0;
		this.enterRecursionRule(_localctx, 0, ExpressionParser.RULE_expression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 10;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ExpressionParser.T__0:
			case ExpressionParser.T__1:
			case ExpressionParser.T__2:
				{
				_localctx = new UnaryOpExpContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 7;
				_la = this._input.LA(1);
				if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ExpressionParser.T__0) | (1 << ExpressionParser.T__1) | (1 << ExpressionParser.T__2))) !== 0))) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 8;
				this.expression(10);
				}
				break;
			case ExpressionParser.T__3:
			case ExpressionParser.T__6:
			case ExpressionParser.T__17:
			case ExpressionParser.T__19:
			case ExpressionParser.T__20:
			case ExpressionParser.T__21:
			case ExpressionParser.T__22:
			case ExpressionParser.T__23:
			case ExpressionParser.NUMBER:
			case ExpressionParser.IDENTIFIER:
			case ExpressionParser.STRING:
				{
				_localctx = new PrimaryExpContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 9;
				this.primaryExpression(0);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 38;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 2, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 36;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 1, this._ctx) ) {
					case 1:
						{
						_localctx = new BinaryOpExpContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, ExpressionParser.RULE_expression);
						this.state = 12;
						if (!(this.precpred(this._ctx, 9))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 9)");
						}
						this.state = 13;
						this.match(ExpressionParser.T__3);
						this.state = 14;
						this.expression(9);
						}
						break;

					case 2:
						{
						_localctx = new BinaryOpExpContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, ExpressionParser.RULE_expression);
						this.state = 15;
						if (!(this.precpred(this._ctx, 8))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 8)");
						}
						this.state = 16;
						_la = this._input.LA(1);
						if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ExpressionParser.T__4) | (1 << ExpressionParser.T__5) | (1 << ExpressionParser.T__6))) !== 0))) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 17;
						this.expression(9);
						}
						break;

					case 3:
						{
						_localctx = new BinaryOpExpContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, ExpressionParser.RULE_expression);
						this.state = 18;
						if (!(this.precpred(this._ctx, 7))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 7)");
						}
						this.state = 19;
						_la = this._input.LA(1);
						if (!(_la === ExpressionParser.T__1 || _la === ExpressionParser.T__2)) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 20;
						this.expression(8);
						}
						break;

					case 4:
						{
						_localctx = new BinaryOpExpContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, ExpressionParser.RULE_expression);
						this.state = 21;
						if (!(this.precpred(this._ctx, 6))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 6)");
						}
						this.state = 22;
						_la = this._input.LA(1);
						if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ExpressionParser.T__7) | (1 << ExpressionParser.T__8) | (1 << ExpressionParser.T__9))) !== 0))) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 23;
						this.expression(7);
						}
						break;

					case 5:
						{
						_localctx = new BinaryOpExpContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, ExpressionParser.RULE_expression);
						this.state = 24;
						if (!(this.precpred(this._ctx, 5))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 5)");
						}
						{
						this.state = 25;
						this.match(ExpressionParser.T__10);
						}
						this.state = 26;
						this.expression(6);
						}
						break;

					case 6:
						{
						_localctx = new BinaryOpExpContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, ExpressionParser.RULE_expression);
						this.state = 27;
						if (!(this.precpred(this._ctx, 4))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 4)");
						}
						this.state = 28;
						_la = this._input.LA(1);
						if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ExpressionParser.T__11) | (1 << ExpressionParser.T__12) | (1 << ExpressionParser.T__13) | (1 << ExpressionParser.T__14))) !== 0))) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 29;
						this.expression(5);
						}
						break;

					case 7:
						{
						_localctx = new BinaryOpExpContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, ExpressionParser.RULE_expression);
						this.state = 30;
						if (!(this.precpred(this._ctx, 3))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 3)");
						}
						this.state = 31;
						this.match(ExpressionParser.T__15);
						this.state = 32;
						this.expression(4);
						}
						break;

					case 8:
						{
						_localctx = new BinaryOpExpContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, ExpressionParser.RULE_expression);
						this.state = 33;
						if (!(this.precpred(this._ctx, 2))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 2)");
						}
						this.state = 34;
						this.match(ExpressionParser.T__16);
						this.state = 35;
						this.expression(3);
						}
						break;
					}
					}
				}
				this.state = 40;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 2, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public primaryExpression(): PrimaryExpressionContext;
	public primaryExpression(_p: number): PrimaryExpressionContext;
	// @RuleVersion(0)
	public primaryExpression(_p?: number): PrimaryExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: PrimaryExpressionContext = new PrimaryExpressionContext(this._ctx, _parentState);
		let _prevctx: PrimaryExpressionContext = _localctx;
		let _startState: number = 2;
		this.enterRecursionRule(_localctx, 2, ExpressionParser.RULE_primaryExpression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 51;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ExpressionParser.T__17:
				{
				_localctx = new ParenthesisExpContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 42;
				this.match(ExpressionParser.T__17);
				this.state = 43;
				this.expression(0);
				this.state = 44;
				this.match(ExpressionParser.T__18);
				}
				break;
			case ExpressionParser.NUMBER:
				{
				_localctx = new NumericAtomContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 46;
				this.match(ExpressionParser.NUMBER);
				}
				break;
			case ExpressionParser.STRING:
				{
				_localctx = new StringAtomContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 47;
				this.match(ExpressionParser.STRING);
				}
				break;
			case ExpressionParser.IDENTIFIER:
				{
				_localctx = new IdAtomContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 48;
				this.match(ExpressionParser.IDENTIFIER);
				}
				break;
			case ExpressionParser.T__3:
			case ExpressionParser.T__6:
			case ExpressionParser.T__19:
			case ExpressionParser.T__20:
			case ExpressionParser.T__21:
			case ExpressionParser.T__22:
			case ExpressionParser.T__23:
				{
				_localctx = new ShortHandExpContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 49;
				_la = this._input.LA(1);
				if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ExpressionParser.T__3) | (1 << ExpressionParser.T__6) | (1 << ExpressionParser.T__19) | (1 << ExpressionParser.T__20) | (1 << ExpressionParser.T__21) | (1 << ExpressionParser.T__22) | (1 << ExpressionParser.T__23))) !== 0))) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 50;
				this.match(ExpressionParser.IDENTIFIER);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 69;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 6, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 67;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 5, this._ctx) ) {
					case 1:
						{
						_localctx = new MemberAccessExpContext(new PrimaryExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, ExpressionParser.RULE_primaryExpression);
						this.state = 53;
						if (!(this.precpred(this._ctx, 3))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 3)");
						}
						this.state = 54;
						this.match(ExpressionParser.T__24);
						this.state = 55;
						this.match(ExpressionParser.IDENTIFIER);
						}
						break;

					case 2:
						{
						_localctx = new FuncInvokeExpContext(new PrimaryExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, ExpressionParser.RULE_primaryExpression);
						this.state = 56;
						if (!(this.precpred(this._ctx, 2))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 2)");
						}
						this.state = 57;
						this.match(ExpressionParser.T__17);
						this.state = 59;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ExpressionParser.T__0) | (1 << ExpressionParser.T__1) | (1 << ExpressionParser.T__2) | (1 << ExpressionParser.T__3) | (1 << ExpressionParser.T__6) | (1 << ExpressionParser.T__17) | (1 << ExpressionParser.T__19) | (1 << ExpressionParser.T__20) | (1 << ExpressionParser.T__21) | (1 << ExpressionParser.T__22) | (1 << ExpressionParser.T__23) | (1 << ExpressionParser.NUMBER) | (1 << ExpressionParser.IDENTIFIER))) !== 0) || _la === ExpressionParser.STRING) {
							{
							this.state = 58;
							this.argsList();
							}
						}

						this.state = 61;
						this.match(ExpressionParser.T__18);
						}
						break;

					case 3:
						{
						_localctx = new IndexAccessExpContext(new PrimaryExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, ExpressionParser.RULE_primaryExpression);
						this.state = 62;
						if (!(this.precpred(this._ctx, 1))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
						}
						this.state = 63;
						this.match(ExpressionParser.T__25);
						this.state = 64;
						this.expression(0);
						this.state = 65;
						this.match(ExpressionParser.T__26);
						}
						break;
					}
					}
				}
				this.state = 71;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 6, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public argsList(): ArgsListContext {
		let _localctx: ArgsListContext = new ArgsListContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, ExpressionParser.RULE_argsList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 72;
			this.expression(0);
			this.state = 77;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ExpressionParser.T__27) {
				{
				{
				this.state = 73;
				this.match(ExpressionParser.T__27);
				this.state = 74;
				this.expression(0);
				}
				}
				this.state = 79;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 0:
			return this.expression_sempred(_localctx as ExpressionContext, predIndex);

		case 1:
			return this.primaryExpression_sempred(_localctx as PrimaryExpressionContext, predIndex);
		}
		return true;
	}
	private expression_sempred(_localctx: ExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 9);

		case 1:
			return this.precpred(this._ctx, 8);

		case 2:
			return this.precpred(this._ctx, 7);

		case 3:
			return this.precpred(this._ctx, 6);

		case 4:
			return this.precpred(this._ctx, 5);

		case 5:
			return this.precpred(this._ctx, 4);

		case 6:
			return this.precpred(this._ctx, 3);

		case 7:
			return this.precpred(this._ctx, 2);
		}
		return true;
	}
	private primaryExpression_sempred(_localctx: PrimaryExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 8:
			return this.precpred(this._ctx, 3);

		case 9:
			return this.precpred(this._ctx, 2);

		case 10:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}

	public static readonly _serializedATN: string =
		"\x03\uAF6F\u8320\u479D\uB75C\u4880\u1605\u191C\uAB37\x03#S\x04\x02\t\x02" +
		"\x04\x03\t\x03\x04\x04\t\x04\x03\x02\x03\x02\x03\x02\x03\x02\x05\x02\r" +
		"\n\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02" +
		"\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02" +
		"\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x07\x02\'\n\x02" +
		"\f\x02\x0E\x02*\v\x02\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x05\x036\n\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x05\x03>\n\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x07\x03F\n\x03\f\x03\x0E\x03I\v\x03\x03\x04\x03\x04\x03" +
		"\x04\x07\x04N\n\x04\f\x04\x0E\x04Q\v\x04\x03\x04\x02\x02\x04\x02\x04\x05" +
		"\x02\x02\x04\x02\x06\x02\x02\b\x03\x02\x03\x05\x03\x02\x07\t\x03\x02\x04" +
		"\x05\x03\x02\n\f\x03\x02\x0E\x11\x05\x02\x06\x06\t\t\x16\x1Aa\x02\f\x03" +
		"\x02\x02\x02\x045\x03\x02\x02\x02\x06J\x03\x02\x02\x02\b\t\b\x02\x01\x02" +
		"\t\n\t\x02\x02\x02\n\r\x05\x02\x02\f\v\r\x05\x04\x03\x02\f\b\x03\x02\x02" +
		"\x02\f\v\x03\x02\x02\x02\r(\x03\x02\x02\x02\x0E\x0F\f\v\x02\x02\x0F\x10" +
		"\x07\x06\x02\x02\x10\'\x05\x02\x02\v\x11\x12\f\n\x02\x02\x12\x13\t\x03" +
		"\x02\x02\x13\'\x05\x02\x02\v\x14\x15\f\t\x02\x02\x15\x16\t\x04\x02\x02" +
		"\x16\'\x05\x02\x02\n\x17\x18\f\b\x02\x02\x18\x19\t\x05\x02\x02\x19\'\x05" +
		"\x02\x02\t\x1A\x1B\f\x07\x02\x02\x1B\x1C\x07\r\x02\x02\x1C\'\x05\x02\x02" +
		"\b\x1D\x1E\f\x06\x02\x02\x1E\x1F\t\x06\x02\x02\x1F\'\x05\x02\x02\x07 " +
		"!\f\x05\x02\x02!\"\x07\x12\x02\x02\"\'\x05\x02\x02\x06#$\f\x04\x02\x02" +
		"$%\x07\x13\x02\x02%\'\x05\x02\x02\x05&\x0E\x03\x02\x02\x02&\x11\x03\x02" +
		"\x02\x02&\x14\x03\x02\x02\x02&\x17\x03\x02\x02\x02&\x1A\x03\x02\x02\x02" +
		"&\x1D\x03\x02\x02\x02& \x03\x02\x02\x02&#\x03\x02\x02\x02\'*\x03\x02\x02" +
		"\x02(&\x03\x02\x02\x02()\x03\x02\x02\x02)\x03\x03\x02\x02\x02*(\x03\x02" +
		"\x02\x02+,\b\x03\x01\x02,-\x07\x14\x02\x02-.\x05\x02\x02\x02./\x07\x15" +
		"\x02\x02/6\x03\x02\x02\x0206\x07\x1F\x02\x0216\x07#\x02\x0226\x07!\x02" +
		"\x0234\t\x07\x02\x0246\x07!\x02\x025+\x03\x02\x02\x0250\x03\x02\x02\x02" +
		"51\x03\x02\x02\x0252\x03\x02\x02\x0253\x03\x02\x02\x026G\x03\x02\x02\x02" +
		"78\f\x05\x02\x0289\x07\x1B\x02\x029F\x07!\x02\x02:;\f\x04\x02\x02;=\x07" +
		"\x14\x02\x02<>\x05\x06\x04\x02=<\x03\x02\x02\x02=>\x03\x02\x02\x02>?\x03" +
		"\x02\x02\x02?F\x07\x15\x02\x02@A\f\x03\x02\x02AB\x07\x1C\x02\x02BC\x05" +
		"\x02\x02\x02CD\x07\x1D\x02\x02DF\x03\x02\x02\x02E7\x03\x02\x02\x02E:\x03" +
		"\x02\x02\x02E@\x03\x02\x02\x02FI\x03\x02\x02\x02GE\x03\x02\x02\x02GH\x03" +
		"\x02\x02\x02H\x05\x03\x02\x02\x02IG\x03\x02\x02\x02JO\x05\x02\x02\x02" +
		"KL\x07\x1E\x02\x02LN\x05\x02\x02\x02MK\x03\x02\x02\x02NQ\x03\x02\x02\x02" +
		"OM\x03\x02\x02\x02OP\x03\x02\x02\x02P\x07\x03\x02\x02\x02QO\x03\x02\x02" +
		"\x02\n\f&(5=EGO";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!ExpressionParser.__ATN) {
			ExpressionParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(ExpressionParser._serializedATN));
		}

		return ExpressionParser.__ATN;
	}

}

export class ExpressionContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ExpressionParser.RULE_expression; }
	public copyFrom(ctx: ExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class UnaryOpExpContext extends ExpressionContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ExpressionListener): void {
		if (listener.enterUnaryOpExp) {
			listener.enterUnaryOpExp(this);
		}
	}
	// @Override
	public exitRule(listener: ExpressionListener): void {
		if (listener.exitUnaryOpExp) {
			listener.exitUnaryOpExp(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ExpressionVisitor<Result>): Result {
		if (visitor.visitUnaryOpExp) {
			return visitor.visitUnaryOpExp(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class BinaryOpExpContext extends ExpressionContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ExpressionListener): void {
		if (listener.enterBinaryOpExp) {
			listener.enterBinaryOpExp(this);
		}
	}
	// @Override
	public exitRule(listener: ExpressionListener): void {
		if (listener.exitBinaryOpExp) {
			listener.exitBinaryOpExp(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ExpressionVisitor<Result>): Result {
		if (visitor.visitBinaryOpExp) {
			return visitor.visitBinaryOpExp(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class PrimaryExpContext extends ExpressionContext {
	public primaryExpression(): PrimaryExpressionContext {
		return this.getRuleContext(0, PrimaryExpressionContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ExpressionListener): void {
		if (listener.enterPrimaryExp) {
			listener.enterPrimaryExp(this);
		}
	}
	// @Override
	public exitRule(listener: ExpressionListener): void {
		if (listener.exitPrimaryExp) {
			listener.exitPrimaryExp(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ExpressionVisitor<Result>): Result {
		if (visitor.visitPrimaryExp) {
			return visitor.visitPrimaryExp(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PrimaryExpressionContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ExpressionParser.RULE_primaryExpression; }
	public copyFrom(ctx: PrimaryExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class FuncInvokeExpContext extends PrimaryExpressionContext {
	public primaryExpression(): PrimaryExpressionContext {
		return this.getRuleContext(0, PrimaryExpressionContext);
	}
	public argsList(): ArgsListContext | undefined {
		return this.tryGetRuleContext(0, ArgsListContext);
	}
	constructor(ctx: PrimaryExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ExpressionListener): void {
		if (listener.enterFuncInvokeExp) {
			listener.enterFuncInvokeExp(this);
		}
	}
	// @Override
	public exitRule(listener: ExpressionListener): void {
		if (listener.exitFuncInvokeExp) {
			listener.exitFuncInvokeExp(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ExpressionVisitor<Result>): Result {
		if (visitor.visitFuncInvokeExp) {
			return visitor.visitFuncInvokeExp(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class IdAtomContext extends PrimaryExpressionContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(ExpressionParser.IDENTIFIER, 0); }
	constructor(ctx: PrimaryExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ExpressionListener): void {
		if (listener.enterIdAtom) {
			listener.enterIdAtom(this);
		}
	}
	// @Override
	public exitRule(listener: ExpressionListener): void {
		if (listener.exitIdAtom) {
			listener.exitIdAtom(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ExpressionVisitor<Result>): Result {
		if (visitor.visitIdAtom) {
			return visitor.visitIdAtom(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ShortHandExpContext extends PrimaryExpressionContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(ExpressionParser.IDENTIFIER, 0); }
	constructor(ctx: PrimaryExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ExpressionListener): void {
		if (listener.enterShortHandExp) {
			listener.enterShortHandExp(this);
		}
	}
	// @Override
	public exitRule(listener: ExpressionListener): void {
		if (listener.exitShortHandExp) {
			listener.exitShortHandExp(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ExpressionVisitor<Result>): Result {
		if (visitor.visitShortHandExp) {
			return visitor.visitShortHandExp(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class StringAtomContext extends PrimaryExpressionContext {
	public STRING(): TerminalNode { return this.getToken(ExpressionParser.STRING, 0); }
	constructor(ctx: PrimaryExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ExpressionListener): void {
		if (listener.enterStringAtom) {
			listener.enterStringAtom(this);
		}
	}
	// @Override
	public exitRule(listener: ExpressionListener): void {
		if (listener.exitStringAtom) {
			listener.exitStringAtom(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ExpressionVisitor<Result>): Result {
		if (visitor.visitStringAtom) {
			return visitor.visitStringAtom(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class IndexAccessExpContext extends PrimaryExpressionContext {
	public primaryExpression(): PrimaryExpressionContext {
		return this.getRuleContext(0, PrimaryExpressionContext);
	}
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(ctx: PrimaryExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ExpressionListener): void {
		if (listener.enterIndexAccessExp) {
			listener.enterIndexAccessExp(this);
		}
	}
	// @Override
	public exitRule(listener: ExpressionListener): void {
		if (listener.exitIndexAccessExp) {
			listener.exitIndexAccessExp(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ExpressionVisitor<Result>): Result {
		if (visitor.visitIndexAccessExp) {
			return visitor.visitIndexAccessExp(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class MemberAccessExpContext extends PrimaryExpressionContext {
	public primaryExpression(): PrimaryExpressionContext {
		return this.getRuleContext(0, PrimaryExpressionContext);
	}
	public IDENTIFIER(): TerminalNode { return this.getToken(ExpressionParser.IDENTIFIER, 0); }
	constructor(ctx: PrimaryExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ExpressionListener): void {
		if (listener.enterMemberAccessExp) {
			listener.enterMemberAccessExp(this);
		}
	}
	// @Override
	public exitRule(listener: ExpressionListener): void {
		if (listener.exitMemberAccessExp) {
			listener.exitMemberAccessExp(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ExpressionVisitor<Result>): Result {
		if (visitor.visitMemberAccessExp) {
			return visitor.visitMemberAccessExp(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ParenthesisExpContext extends PrimaryExpressionContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(ctx: PrimaryExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ExpressionListener): void {
		if (listener.enterParenthesisExp) {
			listener.enterParenthesisExp(this);
		}
	}
	// @Override
	public exitRule(listener: ExpressionListener): void {
		if (listener.exitParenthesisExp) {
			listener.exitParenthesisExp(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ExpressionVisitor<Result>): Result {
		if (visitor.visitParenthesisExp) {
			return visitor.visitParenthesisExp(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class NumericAtomContext extends PrimaryExpressionContext {
	public NUMBER(): TerminalNode { return this.getToken(ExpressionParser.NUMBER, 0); }
	constructor(ctx: PrimaryExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ExpressionListener): void {
		if (listener.enterNumericAtom) {
			listener.enterNumericAtom(this);
		}
	}
	// @Override
	public exitRule(listener: ExpressionListener): void {
		if (listener.exitNumericAtom) {
			listener.exitNumericAtom(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ExpressionVisitor<Result>): Result {
		if (visitor.visitNumericAtom) {
			return visitor.visitNumericAtom(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArgsListContext extends ParserRuleContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ExpressionParser.RULE_argsList; }
	// @Override
	public enterRule(listener: ExpressionListener): void {
		if (listener.enterArgsList) {
			listener.enterArgsList(this);
		}
	}
	// @Override
	public exitRule(listener: ExpressionListener): void {
		if (listener.exitArgsList) {
			listener.exitArgsList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ExpressionVisitor<Result>): Result {
		if (visitor.visitArgsList) {
			return visitor.visitArgsList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

