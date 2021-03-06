exports.parser = (function(){
  /*
   * Generated by PEG.js 0.7.0.
   *
   * http://pegjs.majda.cz/
   */
  
  function quote(s) {
    /*
     * ECMA-262, 5th ed., 7.8.4: All characters may appear literally in a
     * string literal except for the closing quote character, backslash,
     * carriage return, line separator, paragraph separator, and line feed.
     * Any character may appear in the form of an escape sequence.
     *
     * For portability, we also escape escape all control and non-ASCII
     * characters. Note that "\0" and "\v" escape sequences are not used
     * because JSHint does not like the first and IE the second.
     */
     return '"' + s
      .replace(/\\/g, '\\\\')  // backslash
      .replace(/"/g, '\\"')    // closing quote character
      .replace(/\x08/g, '\\b') // backspace
      .replace(/\t/g, '\\t')   // horizontal tab
      .replace(/\n/g, '\\n')   // line feed
      .replace(/\f/g, '\\f')   // form feed
      .replace(/\r/g, '\\r')   // carriage return
      .replace(/[\x00-\x07\x0B\x0E-\x1F\x80-\uFFFF]/g, escape)
      + '"';
  }
  
  var result = {
    /*
     * Parses the input with a generated parser. If the parsing is successfull,
     * returns a value explicitly or implicitly specified by the grammar from
     * which the parser was generated (see |PEG.buildParser|). If the parsing is
     * unsuccessful, throws |PEG.parser.SyntaxError| describing the error.
     */
    parse: function(input, startRule) {
      var parseFunctions = {
        "block": parse_block,
        "block_item": parse_block_item,
        "identifier": parse_identifier,
        "literal": parse_literal,
        "_": parse__
      };
      
      if (startRule !== undefined) {
        if (parseFunctions[startRule] === undefined) {
          throw new Error("Invalid rule name: " + quote(startRule) + ".");
        }
      } else {
        startRule = "block";
      }
      
      var pos = 0;
      var reportFailures = 0;
      var rightmostFailuresPos = 0;
      var rightmostFailuresExpected = [];
      
      function padLeft(input, padding, length) {
        var result = input;
        
        var padLength = length - input.length;
        for (var i = 0; i < padLength; i++) {
          result = padding + result;
        }
        
        return result;
      }
      
      function escape(ch) {
        var charCode = ch.charCodeAt(0);
        var escapeChar;
        var length;
        
        if (charCode <= 0xFF) {
          escapeChar = 'x';
          length = 2;
        } else {
          escapeChar = 'u';
          length = 4;
        }
        
        return '\\' + escapeChar + padLeft(charCode.toString(16).toUpperCase(), '0', length);
      }
      
      function matchFailed(failure) {
        if (pos < rightmostFailuresPos) {
          return;
        }
        
        if (pos > rightmostFailuresPos) {
          rightmostFailuresPos = pos;
          rightmostFailuresExpected = [];
        }
        
        rightmostFailuresExpected.push(failure);
      }
      
      function parse_block() {
        var result0, result1, result2, result3, result4, result5, result6, result7, result8, result9;
        var pos0, pos1, pos2;
        
        pos0 = pos;
        pos1 = pos;
        result0 = parse__();
        if (result0 !== null) {
          if (input.charCodeAt(pos) === 123) {
            result1 = "{";
            pos++;
          } else {
            result1 = null;
            if (reportFailures === 0) {
              matchFailed("\"{\"");
            }
          }
          if (result1 !== null) {
            result2 = parse__();
            if (result2 !== null) {
              result3 = parse_block_item();
              result3 = result3 !== null ? result3 : "";
              if (result3 !== null) {
                result4 = parse__();
                if (result4 !== null) {
                  result5 = [];
                  pos2 = pos;
                  if (input.charCodeAt(pos) === 44) {
                    result6 = ",";
                    pos++;
                  } else {
                    result6 = null;
                    if (reportFailures === 0) {
                      matchFailed("\",\"");
                    }
                  }
                  if (result6 !== null) {
                    result7 = parse__();
                    if (result7 !== null) {
                      result8 = parse_block_item();
                      if (result8 !== null) {
                        result9 = parse__();
                        result9 = result9 !== null ? result9 : "";
                        if (result9 !== null) {
                          result6 = [result6, result7, result8, result9];
                        } else {
                          result6 = null;
                          pos = pos2;
                        }
                      } else {
                        result6 = null;
                        pos = pos2;
                      }
                    } else {
                      result6 = null;
                      pos = pos2;
                    }
                  } else {
                    result6 = null;
                    pos = pos2;
                  }
                  while (result6 !== null) {
                    result5.push(result6);
                    pos2 = pos;
                    if (input.charCodeAt(pos) === 44) {
                      result6 = ",";
                      pos++;
                    } else {
                      result6 = null;
                      if (reportFailures === 0) {
                        matchFailed("\",\"");
                      }
                    }
                    if (result6 !== null) {
                      result7 = parse__();
                      if (result7 !== null) {
                        result8 = parse_block_item();
                        if (result8 !== null) {
                          result9 = parse__();
                          result9 = result9 !== null ? result9 : "";
                          if (result9 !== null) {
                            result6 = [result6, result7, result8, result9];
                          } else {
                            result6 = null;
                            pos = pos2;
                          }
                        } else {
                          result6 = null;
                          pos = pos2;
                        }
                      } else {
                        result6 = null;
                        pos = pos2;
                      }
                    } else {
                      result6 = null;
                      pos = pos2;
                    }
                  }
                  if (result5 !== null) {
                    if (input.charCodeAt(pos) === 125) {
                      result6 = "}";
                      pos++;
                    } else {
                      result6 = null;
                      if (reportFailures === 0) {
                        matchFailed("\"}\"");
                      }
                    }
                    if (result6 !== null) {
                      result7 = parse__();
                      if (result7 !== null) {
                        result0 = [result0, result1, result2, result3, result4, result5, result6, result7];
                      } else {
                        result0 = null;
                        pos = pos1;
                      }
                    } else {
                      result0 = null;
                      pos = pos1;
                    }
                  } else {
                    result0 = null;
                    pos = pos1;
                  }
                } else {
                  result0 = null;
                  pos = pos1;
                }
              } else {
                result0 = null;
                pos = pos1;
              }
            } else {
              result0 = null;
              pos = pos1;
            }
          } else {
            result0 = null;
            pos = pos1;
          }
        } else {
          result0 = null;
          pos = pos1;
        }
        if (result0 !== null) {
          result0 = (function(offset, bk1, bk2) {
            var val = {};
            if (bk1.key != null){
                val[bk1.key] = bk1.val;
            }
            if (bk2 != null){
                for (var i =0;i<bk2.length; i++){
                    val[bk2[i][2].key] = bk2[i][2].val;
                }
            }
            //console.log("\nval", val);
            return {"!type":"OBJ", val:val};
        })(pos0, result0[3], result0[5]);
        }
        if (result0 === null) {
          pos = pos0;
        }
        if (result0 === null) {
          pos0 = pos;
          result0 = parse_literal();
          if (result0 !== null) {
            result0 = (function(offset, lit) { return lit; })(pos0, result0);
          }
          if (result0 === null) {
            pos = pos0;
          }
        }
        return result0;
      }
      
      function parse_block_item() {
        var result0, result1, result2, result3, result4;
        var pos0, pos1;
        
        pos0 = pos;
        pos1 = pos;
        result0 = parse_identifier();
        if (result0 !== null) {
          result1 = parse__();
          if (result1 !== null) {
            if (input.charCodeAt(pos) === 58) {
              result2 = ":";
              pos++;
            } else {
              result2 = null;
              if (reportFailures === 0) {
                matchFailed("\":\"");
              }
            }
            if (result2 !== null) {
              result3 = parse__();
              if (result3 !== null) {
                result4 = parse_block();
                if (result4 !== null) {
                  result0 = [result0, result1, result2, result3, result4];
                } else {
                  result0 = null;
                  pos = pos1;
                }
              } else {
                result0 = null;
                pos = pos1;
              }
            } else {
              result0 = null;
              pos = pos1;
            }
          } else {
            result0 = null;
            pos = pos1;
          }
        } else {
          result0 = null;
          pos = pos1;
        }
        if (result0 !== null) {
          result0 = (function(offset, key, val) { return {key:key, val:val}; })(pos0, result0[0], result0[4]);
        }
        if (result0 === null) {
          pos = pos0;
        }
        return result0;
      }
      
      function parse_identifier() {
        var result0, result1, result2, result3;
        var pos0, pos1;
        
        pos0 = pos;
        pos1 = pos;
        if (input.charCodeAt(pos) === 34) {
          result0 = "\"";
          pos++;
        } else {
          result0 = null;
          if (reportFailures === 0) {
            matchFailed("\"\\\"\"");
          }
        }
        if (result0 !== null) {
          if (input.charCodeAt(pos) === 36) {
            result1 = "$";
            pos++;
          } else {
            result1 = null;
            if (reportFailures === 0) {
              matchFailed("\"$\"");
            }
          }
          if (result1 === null) {
            if (input.charCodeAt(pos) === 46) {
              result1 = ".";
              pos++;
            } else {
              result1 = null;
              if (reportFailures === 0) {
                matchFailed("\".\"");
              }
            }
            if (result1 === null) {
              result1 = "";
            }
          }
          if (result1 !== null) {
            if (/^[A-z0-9]/.test(input.charAt(pos))) {
              result3 = input.charAt(pos);
              pos++;
            } else {
              result3 = null;
              if (reportFailures === 0) {
                matchFailed("[A-z0-9]");
              }
            }
            if (result3 !== null) {
              result2 = [];
              while (result3 !== null) {
                result2.push(result3);
                if (/^[A-z0-9]/.test(input.charAt(pos))) {
                  result3 = input.charAt(pos);
                  pos++;
                } else {
                  result3 = null;
                  if (reportFailures === 0) {
                    matchFailed("[A-z0-9]");
                  }
                }
              }
            } else {
              result2 = null;
            }
            if (result2 !== null) {
              if (input.charCodeAt(pos) === 34) {
                result3 = "\"";
                pos++;
              } else {
                result3 = null;
                if (reportFailures === 0) {
                  matchFailed("\"\\\"\"");
                }
              }
              if (result3 !== null) {
                result0 = [result0, result1, result2, result3];
              } else {
                result0 = null;
                pos = pos1;
              }
            } else {
              result0 = null;
              pos = pos1;
            }
          } else {
            result0 = null;
            pos = pos1;
          }
        } else {
          result0 = null;
          pos = pos1;
        }
        if (result0 !== null) {
          result0 = (function(offset, prefix, characters) { return prefix+characters.join(""); })(pos0, result0[1], result0[2]);
        }
        if (result0 === null) {
          pos = pos0;
        }
        if (result0 === null) {
          pos0 = pos;
          pos1 = pos;
          if (input.charCodeAt(pos) === 36) {
            result0 = "$";
            pos++;
          } else {
            result0 = null;
            if (reportFailures === 0) {
              matchFailed("\"$\"");
            }
          }
          if (result0 === null) {
            if (input.charCodeAt(pos) === 46) {
              result0 = ".";
              pos++;
            } else {
              result0 = null;
              if (reportFailures === 0) {
                matchFailed("\".\"");
              }
            }
            if (result0 === null) {
              result0 = "";
            }
          }
          if (result0 !== null) {
            if (/^[A-z0-9]/.test(input.charAt(pos))) {
              result2 = input.charAt(pos);
              pos++;
            } else {
              result2 = null;
              if (reportFailures === 0) {
                matchFailed("[A-z0-9]");
              }
            }
            if (result2 !== null) {
              result1 = [];
              while (result2 !== null) {
                result1.push(result2);
                if (/^[A-z0-9]/.test(input.charAt(pos))) {
                  result2 = input.charAt(pos);
                  pos++;
                } else {
                  result2 = null;
                  if (reportFailures === 0) {
                    matchFailed("[A-z0-9]");
                  }
                }
              }
            } else {
              result1 = null;
            }
            if (result1 !== null) {
              result0 = [result0, result1];
            } else {
              result0 = null;
              pos = pos1;
            }
          } else {
            result0 = null;
            pos = pos1;
          }
          if (result0 !== null) {
            result0 = (function(offset, prefix, characters) { return prefix+characters.join(""); })(pos0, result0[0], result0[1]);
          }
          if (result0 === null) {
            pos = pos0;
          }
        }
        return result0;
      }
      
      function parse_literal() {
        var result0, result1, result2;
        var pos0, pos1;
        
        pos0 = pos;
        if (input.substr(pos, 4) === "true") {
          result0 = "true";
          pos += 4;
        } else {
          result0 = null;
          if (reportFailures === 0) {
            matchFailed("\"true\"");
          }
        }
        if (result0 !== null) {
          result0 = (function(offset) {return {"!type":"BOOL", val:true}; })(pos0);
        }
        if (result0 === null) {
          pos = pos0;
        }
        if (result0 === null) {
          pos0 = pos;
          if (input.substr(pos, 5) === "false") {
            result0 = "false";
            pos += 5;
          } else {
            result0 = null;
            if (reportFailures === 0) {
              matchFailed("\"false\"");
            }
          }
          if (result0 !== null) {
            result0 = (function(offset) {return {"!type":"BOOL", val:false};})(pos0);
          }
          if (result0 === null) {
            pos = pos0;
          }
          if (result0 === null) {
            pos0 = pos;
            pos1 = pos;
            if (input.charCodeAt(pos) === 34) {
              result0 = "\"";
              pos++;
            } else {
              result0 = null;
              if (reportFailures === 0) {
                matchFailed("\"\\\"\"");
              }
            }
            if (result0 !== null) {
              result1 = [];
              if (/^[^"]/.test(input.charAt(pos))) {
                result2 = input.charAt(pos);
                pos++;
              } else {
                result2 = null;
                if (reportFailures === 0) {
                  matchFailed("[^\"]");
                }
              }
              while (result2 !== null) {
                result1.push(result2);
                if (/^[^"]/.test(input.charAt(pos))) {
                  result2 = input.charAt(pos);
                  pos++;
                } else {
                  result2 = null;
                  if (reportFailures === 0) {
                    matchFailed("[^\"]");
                  }
                }
              }
              if (result1 !== null) {
                if (input.charCodeAt(pos) === 34) {
                  result2 = "\"";
                  pos++;
                } else {
                  result2 = null;
                  if (reportFailures === 0) {
                    matchFailed("\"\\\"\"");
                  }
                }
                if (result2 !== null) {
                  result0 = [result0, result1, result2];
                } else {
                  result0 = null;
                  pos = pos1;
                }
              } else {
                result0 = null;
                pos = pos1;
              }
            } else {
              result0 = null;
              pos = pos1;
            }
            if (result0 !== null) {
              result0 = (function(offset, characters) {var obj = {"!type":"STR", val:characters.join("")}; if(obj.val === "null") obj.val = null; return obj;})(pos0, result0[1]);
            }
            if (result0 === null) {
              pos = pos0;
            }
            if (result0 === null) {
              pos0 = pos;
              pos1 = pos;
              if (input.charCodeAt(pos) === 39) {
                result0 = "'";
                pos++;
              } else {
                result0 = null;
                if (reportFailures === 0) {
                  matchFailed("\"'\"");
                }
              }
              if (result0 !== null) {
                result1 = [];
                if (/^[^']/.test(input.charAt(pos))) {
                  result2 = input.charAt(pos);
                  pos++;
                } else {
                  result2 = null;
                  if (reportFailures === 0) {
                    matchFailed("[^']");
                  }
                }
                while (result2 !== null) {
                  result1.push(result2);
                  if (/^[^']/.test(input.charAt(pos))) {
                    result2 = input.charAt(pos);
                    pos++;
                  } else {
                    result2 = null;
                    if (reportFailures === 0) {
                      matchFailed("[^']");
                    }
                  }
                }
                if (result1 !== null) {
                  if (input.charCodeAt(pos) === 39) {
                    result2 = "'";
                    pos++;
                  } else {
                    result2 = null;
                    if (reportFailures === 0) {
                      matchFailed("\"'\"");
                    }
                  }
                  if (result2 !== null) {
                    result0 = [result0, result1, result2];
                  } else {
                    result0 = null;
                    pos = pos1;
                  }
                } else {
                  result0 = null;
                  pos = pos1;
                }
              } else {
                result0 = null;
                pos = pos1;
              }
              if (result0 !== null) {
                result0 = (function(offset, characters) {var obj = {"!type":"STR", val:characters.join("")}; if(obj.val === "null") obj.val = null; return obj;})(pos0, result0[1]);
              }
              if (result0 === null) {
                pos = pos0;
              }
            }
          }
        }
        return result0;
      }
      
      function parse__() {
        var result0, result1;
        var pos0;
        
        pos0 = pos;
        result0 = [];
        if (input.charCodeAt(pos) === 9) {
          result1 = "\t";
          pos++;
        } else {
          result1 = null;
          if (reportFailures === 0) {
            matchFailed("\"\\t\"");
          }
        }
        if (result1 === null) {
          if (input.charCodeAt(pos) === 32) {
            result1 = " ";
            pos++;
          } else {
            result1 = null;
            if (reportFailures === 0) {
              matchFailed("\" \"");
            }
          }
          if (result1 === null) {
            if (input.charCodeAt(pos) === 10) {
              result1 = "\n";
              pos++;
            } else {
              result1 = null;
              if (reportFailures === 0) {
                matchFailed("\"\\n\"");
              }
            }
          }
        }
        while (result1 !== null) {
          result0.push(result1);
          if (input.charCodeAt(pos) === 9) {
            result1 = "\t";
            pos++;
          } else {
            result1 = null;
            if (reportFailures === 0) {
              matchFailed("\"\\t\"");
            }
          }
          if (result1 === null) {
            if (input.charCodeAt(pos) === 32) {
              result1 = " ";
              pos++;
            } else {
              result1 = null;
              if (reportFailures === 0) {
                matchFailed("\" \"");
              }
            }
            if (result1 === null) {
              if (input.charCodeAt(pos) === 10) {
                result1 = "\n";
                pos++;
              } else {
                result1 = null;
                if (reportFailures === 0) {
                  matchFailed("\"\\n\"");
                }
              }
            }
          }
        }
        if (result0 !== null) {
          result0 = (function(offset) { return "";})(pos0);
        }
        if (result0 === null) {
          pos = pos0;
        }
        return result0;
      }
      
      
      function cleanupExpected(expected) {
        expected.sort();
        
        var lastExpected = null;
        var cleanExpected = [];
        for (var i = 0; i < expected.length; i++) {
          if (expected[i] !== lastExpected) {
            cleanExpected.push(expected[i]);
            lastExpected = expected[i];
          }
        }
        return cleanExpected;
      }
      
      function computeErrorPosition() {
        /*
         * The first idea was to use |String.split| to break the input up to the
         * error position along newlines and derive the line and column from
         * there. However IE's |split| implementation is so broken that it was
         * enough to prevent it.
         */
        
        var line = 1;
        var column = 1;
        var seenCR = false;
        
        for (var i = 0; i < Math.max(pos, rightmostFailuresPos); i++) {
          var ch = input.charAt(i);
          if (ch === "\n") {
            if (!seenCR) { line++; }
            column = 1;
            seenCR = false;
          } else if (ch === "\r" || ch === "\u2028" || ch === "\u2029") {
            line++;
            column = 1;
            seenCR = true;
          } else {
            column++;
            seenCR = false;
          }
        }
        
        return { line: line, column: column };
      }
      
      
      var result = parseFunctions[startRule]();
      
      /*
       * The parser is now in one of the following three states:
       *
       * 1. The parser successfully parsed the whole input.
       *
       *    - |result !== null|
       *    - |pos === input.length|
       *    - |rightmostFailuresExpected| may or may not contain something
       *
       * 2. The parser successfully parsed only a part of the input.
       *
       *    - |result !== null|
       *    - |pos < input.length|
       *    - |rightmostFailuresExpected| may or may not contain something
       *
       * 3. The parser did not successfully parse any part of the input.
       *
       *   - |result === null|
       *   - |pos === 0|
       *   - |rightmostFailuresExpected| contains at least one failure
       *
       * All code following this comment (including called functions) must
       * handle these states.
       */
      if (result === null || pos !== input.length) {
        var offset = Math.max(pos, rightmostFailuresPos);
        var found = offset < input.length ? input.charAt(offset) : null;
        var errorPosition = computeErrorPosition();
        
        throw new this.SyntaxError(
          cleanupExpected(rightmostFailuresExpected),
          found,
          offset,
          errorPosition.line,
          errorPosition.column
        );
      }
      
      return result;
    },
    
    /* Returns the parser source code. */
    toSource: function() { return this._source; }
  };
  
  /* Thrown when a parser encounters a syntax error. */
  
  result.SyntaxError = function(expected, found, offset, line, column) {
    function buildMessage(expected, found) {
      var expectedHumanized, foundHumanized;
      
      switch (expected.length) {
        case 0:
          expectedHumanized = "end of input";
          break;
        case 1:
          expectedHumanized = expected[0];
          break;
        default:
          expectedHumanized = expected.slice(0, expected.length - 1).join(", ")
            + " or "
            + expected[expected.length - 1];
      }
      
      foundHumanized = found ? quote(found) : "end of input";
      
      return "Expected " + expectedHumanized + " but " + foundHumanized + " found.";
    }
    
    this.name = "SyntaxError";
    this.expected = expected;
    this.found = found;
    this.message = buildMessage(expected, found);
    this.offset = offset;
    this.line = line;
    this.column = column;
  };
  
  result.SyntaxError.prototype = Error.prototype;
  
  return result;
})();