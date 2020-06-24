const mongoose = require('mongoose/browser');
const { QuantityComparatorSchema } = require('./QuantityComparator');
const { QuantitySchema } = require('./Quantity');
const { QuantitySchemaFunction } = require('./Quantity');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const MoneyQuantitySchema = QuantitySchemaFunction({
   value : Number,
   comparator : QuantityComparatorSchema,
   unit : String,
   system : String,
   code : String,
   fhirTitle: { type: String, default: 'MoneyQuantity' },
});

class MoneyQuantity extends mongoose.Document {
  constructor(object) {
    super(object, MoneyQuantitySchema);
    this._type = 'FHIR::MoneyQuantity';
  }
};


module.exports.MoneyQuantitySchema = MoneyQuantitySchema;
module.exports.MoneyQuantity = MoneyQuantity;
