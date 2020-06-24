const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const ExpressionSchema = ElementSchemaFunction({
   description : String,
   name : String,
   language : String,
   expression : String,
   reference : String,
   fhirTitle: { type: String, default: 'Expression' },
});

class Expression extends mongoose.Document {
  constructor(object) {
    super(object, ExpressionSchema);
    this._type = 'FHIR::Expression';
  }
};


module.exports.ExpressionSchema = ExpressionSchema;
module.exports.Expression = Expression;
