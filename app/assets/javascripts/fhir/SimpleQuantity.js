const mongoose = require('mongoose/browser');
const { QuantitySchema } = require('./Quantity');
const { QuantitySchemaFunction } = require('./Quantity');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const SimpleQuantitySchema = QuantitySchemaFunction({
   value : Number,
   unit : String,
   system : String,
   code : String,
   fhirTitle: { type: String, default: 'SimpleQuantity' },
});

class SimpleQuantity extends mongoose.Document {
  constructor(object) {
    super(object, SimpleQuantitySchema);
    this._type = 'FHIR::SimpleQuantity';
  }
};


module.exports.SimpleQuantitySchema = SimpleQuantitySchema;
module.exports.SimpleQuantity = SimpleQuantity;
