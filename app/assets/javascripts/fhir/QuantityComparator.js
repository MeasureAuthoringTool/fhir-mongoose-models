const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const QuantityComparatorSchema = ElementSchemaFunction({
   value : String,
   fhirTitle: { type: String, default: 'QuantityComparator' },
});

class QuantityComparator extends mongoose.Document {
  constructor(object) {
    super(object, QuantityComparatorSchema);
    this._type = 'FHIR::QuantityComparator';
  }
};


module.exports.QuantityComparatorSchema = QuantityComparatorSchema;
module.exports.QuantityComparator = QuantityComparator;
