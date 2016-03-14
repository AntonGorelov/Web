describe("checkBracket", function() {
  it("Проверка для '()', '[]', '{}'", function() {
    assert.equal(checkBracket("()"), 0);
    assert.equal(checkBracket("[]"), 0);
    assert.equal(checkBracket("[]"), 0);
  });
  it("Проверка для '(]', '[)', '{{}'", function() {
    assert.equal(checkBracket("(]"), 1);
    assert.equal(checkBracket("[)"), 1);
    assert.equal(checkBracket("{])"), 1);
  });
  it("Проверка для '({)}', '[({)]}'", function() {
    assert.equal(checkBracket('({)}'), 2);
    assert.equal(checkBracket('[({)]}'), 3);
  });
  it("Проверка для '(', '{', '['", function() {
    assert.equal(checkBracket("("), -1);
    assert.equal(checkBracket("{"), -1);
    assert.equal(checkBracket("["), -1)
  });
  it("Проверка для 'test text () {} [] ([]) {[()]}'", function() {
    assert.equal(checkBracket("("), -1);
    assert.equal(checkBracket("{"), -1);
    assert.equal(checkBracket("["), -1);
    assert.equal(checkBracket("(a)"), 0);
  });

});
/*--------------------------------------------------------------------*/
describe("Валидация E-mail validateEmail", function() {
  it("Проверка для test@gmail.com, test@yandex.ru", function() {
    assert.isTrue(validateEmail("test@gmail.com"), true);
    assert.isTrue(validateEmail("test@yandex.ru"), true);
  });
  it("Проверка для test@gmail, test@yandex", function() {
    assert.isFalse(validateEmail("test@gmail"), false);
    assert.isFalse(validateEmail("test@yandex"), false);
  });
  it("Проверка для test-gmail.com, test-yandex.ru", function() {
    assert.isFalse(validateEmail("test-gmail.com"), false);
    assert.isFalse(validateEmail("test-yandex.ru"), false);
  });
  it("Проверка для @gmail.com, @yandex.ru", function() {
    assert.isFalse(validateEmail("@gmail.com"), false);
    assert.isFalse(validateEmail("@yandex.ru"), false);
  });
  it("Проверка для test@@@gmail.com, test@@@yandex.ru", function() {
    assert.isFalse(validateEmail("test@@@gmail.com"), false);
    assert.isFalse(validateEmail("test@@@yandex.ru"), false);
  });
  it("Проверка для gmail, yandex", function() {
    assert.isFalse(validateEmail("gmail"), false);
    assert.isFalse(validateEmail("yandex"), false);
  });
});
/*--------------------------------------------------------------------*/
describe("Валидация телефона validatePhone", function() {
  it("Проверка для номера 89612691428", function() {
    assert.equal(validatePhone("89612691428"), true);
  });
  it("Проверка для номера +79612691428", function() {
    assert.equal(validatePhone("+79612691428"), true);
});
  it("Проверка для номера 79612691428", function() {
    assert.equal(validatePhone("79612691428"), true);
  });
  it("Проверка для номера +7961-269-14-28", function() {
    assert.equal(validatePhone("+7961-269-14-28"), true);
  });
  it("Проверка для номера 8961-269-14-28", function() {
    assert.equal(validatePhone("8961-269-14-28"), true);
  });
  it("Проверка для номера 7961-269-14-28", function() {
    assert.equal(validatePhone("7961-269-14-28"), true);
  });
});
/*--------------------------------------------------------------------*/
describe("Валидация банковской карты validateBankCard", function() {
  it("Проверка номера банковской карты вида 1000 1000 1000 1000", function() {
    assert.equal(validateBankCard("1000 1000 1000 1000"), true);
  });
  it("Проверка номера банковской карты вида 1000-1000-1000-1000 ", function() {
    assert.equal(validateBankCard("1000-1000-1000-1000"), true);
  });
  it("Проверка номера банковской карты вида 1000100010001000", function() {
    assert.equal(validateBankCard("1000100010001000"), true);
  });
});
/*--------------------------------------------------------------------*/
describe("Замена слов из массива на *. replaceWords", function() {
  it("Замена слов из массива на * вида aaa aaa", function() {
    assert.equal(replaceWords("aaa aaa", ['aaa','aaa']), "*** ***");
  });
  it("Замена слов из массива на * вида aaaaac", function() {
    assert.equal(replaceWords("aaaaac", ['a','c']), "******");
  });
  it("Замена слов из массива на * вида qqq szz", function() {
    assert.equal(replaceWords("qqq szz", ['abc','szz']), "qqq ***");
  });
  it("Замена слов из массива на * вида afd aag", function() {
    assert.equal(replaceWords("afd aag", ['afd','aag']), "*** ***");
  });
});
/*--------------------------------------------------------------------*/
describe("Найти все теги внутри элемента с заданным id и их количество countEachTagByParentId", function() {
  it("Проверка для контейнера с id = countTags1", function() {
    var tags = countEachTagByParentId("countTags1");
    assert.equal(tags["P"], 1);
    assert.equal(tags["STRONG"], 2);
    assert.equal(tags["SPAN"], 2);
    assert.equal(tags["BR"], 2);
  });
  it("Проверка для контейнера с id = countTags2", function() {
    var tags = countEachTagByParentId("countTags2");
    assert.equal(tags["P"], 3);
    assert.equal(tags["H1"], 1);
    assert.equal(tags["DIV"], 1);
    assert.equal(tags["BR"], 2);
  });
  it("Проверка для контейнера с id = countTags3", function() {
    var tags = countEachTagByParentId("countTags3");
    var isEmpty = function(obj) { for (var key in obj) {   return false;  } return true; };
    assert.isTrue(isEmpty(tags));
  });
});
/*--------------------------------------------------------------------*/
describe("Работа с событиями и DOM flex контейнера", function() {
  it("Проверка для контейнера с id = countTags1", function() {
    var tags = countEachTagByParentId("countTags1");
    assert.equal(tags["P"], 1);
    assert.equal(tags["STRONG"], 2);
    assert.equal(tags["SPAN"], 2);
    assert.equal(tags["BR"], 2);
  });
});
