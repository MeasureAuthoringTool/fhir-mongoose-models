const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { FilterOperatorSchema } = require('./FilterOperator');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const CodeSystemFilterSchema = BackboneElementSchemaFunction({
   code : String,
   description : String,
   operator : [FilterOperatorSchema],
   value : String,
   fhirTitle: { type: String, default: 'CodeSystemFilter' },
});

class CodeSystemFilter extends mongoose.Document {
  constructor(object) {
    super(object, CodeSystemFilterSchema);
    this._type = 'FHIR::CodeSystemFilter';
  }
};


module.exports.CodeSystemFilterSchema = CodeSystemFilterSchema;
module.exports.CodeSystemFilter = CodeSystemFilter;
