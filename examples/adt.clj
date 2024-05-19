(def Just (fn [x] (fn [handler] ((:Just handler) x))))
(def Nothing (fn [handler] (:Nothing handler)))

(defn match [value handler] (value handler))

(defn safeDivide [numerator, denominator]
  (if (= 0 denominator) Nothing (Just (/ numerator denominator))))

(defn displayResult [maybeValue]
  (let [extractedValue (match maybeValue {
    :Just (fn [result] (str "Result of division is " result))
    :Nothing "Handled divide by zero error"})]
    (println extractedValue)))

(def badDivision (safeDivide 5 0))
(def goodDivision (safeDivide 22 7))

(displayResult badDivision)
(displayResult goodDivision)
