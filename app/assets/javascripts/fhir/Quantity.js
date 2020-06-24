const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { QuantityComparatorSchema } = require('./QuantityComparator');
const { ElementSchemaFunction } = require('./Element');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const QuantitySchema = ElementSchemaFunction({
   value : Number,
   comparator : QuantityComparatorSchema,
   unit : String,
   system : String,
   code : String,
   fhirTitle: { type: String, default: 'Quantity' },
});

class Quantity extends mongoose.Document {
  constructor(object) {
    super(object, QuantitySchema);
    this._type = 'FHIR::Quantity';
  }
};

function  QuantitySchemaFunction(add: SchemaDefinition, options: SchemaOptions) {
  const extended = new Schema({
   value : Number,
   comparator : QuantityComparatorSchema,
   unit : String,
   system : String,
   code : String,
    id: {
      type: String,
      default() {
        return this._id ? this._id.toString() : mongoose.Types.ObjectId().toString();
      },
    },
  }, options);

  if (add) {
    extended.add(add);
  }
  return extended;
}

module.exports.QuantitySchemaFunction = QuantitySchemaFunction;
module.exports.QuantitySchema = QuantitySchema;
module.exports.Quantity = Quantity;
