const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const BiologicallyDerivedProductCategorySchema = ElementSchemaFunction({
   value : String,
   fhirTitle: { type: String, default: 'BiologicallyDerivedProductCategory' },
});

class BiologicallyDerivedProductCategory extends mongoose.Document {
  constructor(object) {
    super(object, BiologicallyDerivedProductCategorySchema);
    this._type = 'FHIR::BiologicallyDerivedProductCategory';
  }
};


module.exports.BiologicallyDerivedProductCategorySchema = BiologicallyDerivedProductCategorySchema;
module.exports.BiologicallyDerivedProductCategory = BiologicallyDerivedProductCategory;
